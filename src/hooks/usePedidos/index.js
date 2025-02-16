/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  listarPedidos,
  cadastrarPedido,
  editarPedido,
  excluirPedido,
} from "../../services/Pedidos";
import * as yup from 'yup'
import { errorAlertMessage, makeValidation } from "../../utils/funcoes";
import useLoadingStore from "../useLoadingStore";
import { useNavigate } from "react-router-dom";
import schemaItensPed from "../../pages/Pedidos/Abas/ItensDoPedido/schema";
import validationSchemaPed from "../../pages/Pedidos/Abas/CadastroDoPedido/Schema";

const PedidosContext = createContext();

export const PedidosProvider = ({ children }) => {
  const { setIsLoading } = useLoadingStore();
  const formFiltrosRef  = useRef(null);
  const formItensRef  = useRef(null);
  const [abaAtiva, setAbaAtiva] = useState(0);
  const [pedidoSelecionado, setPedidoSelecionado] = useState(null);
  const [listaPedidos, setListaPedidos] = useState([]);
  // const navigate = useNavigate()

  useEffect(() => {
    console.log("Pedido Selecionado no Contexto:", pedidoSelecionado);
  }, [pedidoSelecionado]);

  const buscarPedidos = async () => {
    try {
      setIsLoading(true);
      const response = await listarPedidos();
      setListaPedidos(response);
    } catch (err) {
      errorAlertMessage(err);
    } finally {
      setIsLoading(false);
    }
  };

  // TODO: criar uma função de caunt para poder utilizar no campo de pedido
  const addRequest = () => {
    setListaPedidos((prevPedidos) => [...prevPedidos])
  }

  const validarCapaPedido = async () => {
    try {

      const pedidoData = {
        capa: formFiltrosRef.current?.getFieldValue("capa"),
        cliente: formFiltrosRef.current?.getFieldValue("cliente"),
        data_criacao: formFiltrosRef.current?.getFieldValue("data_criacao"),
        data_entrega: formFiltrosRef.current?.getFieldValue("data_entrega"),
        endereco_entrega: formFiltrosRef.current?.getFieldValue("endereco_entrega"),
        forma_pagamento: formFiltrosRef.current?.getFieldValue("forma_pagamento"),
        observacoes: formFiltrosRef.current?.getFieldValue("observacoes"),
        itens: [{ id: '', produto: '', quantidade: '', preco: '', total: '' }],
      }

      const pedidoValidado = await makeValidation(
        validationSchemaPed,
        pedidoData,
        formFiltrosRef
      )

      console.log("Pedido Validado",pedidoValidado)

      if (!pedidoValidado) {
        return false
      }
      
      setPedidoSelecionado(pedidoData)

      return { pedidoValidado, pedidoData }

    } catch (error) {
      console.error("Erro de validação", error)
    }
  }

  const validarItens = async () => {
    try {

      const itensData = {
        produto: formItensRef.current?.getFieldValue("produto"),
        quantidade: formItensRef.current?.getFieldValue("quantidade"),
        preco: formItensRef.current?.getFieldValue("preco"),
        total: formItensRef.current?.getFieldValue("total"),
      }

      console.log("Itens", itensData)

      const itensValidados = await makeValidation(
        schemaItensPed,
        itensData,
        formItensRef,
      )

      console.log("Itens validado", itensValidados)

      return { itensValidados}
    } catch (error) {
      console.error("Erro ao validar form", error)
    }
  }

  const cadastrouPedido = async () => {
    try {

      const { pedidoData } = await validarCapaPedido()

      const { itensValidados } = await validarItens()

      pedidoData.itens = itensValidados

      const pedidoCriado = await cadastrarPedido(pedidoData)
      console.log("Cadastrou o pedido com sucesso", pedidoCriado)

      addRequest(pedidoCriado)
      setPedidoSelecionado(pedidoData)

    } catch(error) {
      console.error("Erro de validação", error)
    }
  }

  const atualizarPedido = async () => {
    const data = Object.fromEntries(new FormData(formFiltrosRef.current))

    let validationSchema = yup.object().shape({
      capa: yup.string().required("Capa do Pedido é obrigatório"),
      cliente: yup.string().required("Cliente é obrigatório"),
      data_criacao: yup.date().nullable().typeError('Data inválida'),
      endereco_entrega: yup.string().required("Endereço é obrigatório"),
      forma_pagamento: yup.string().required('Forma de pagamento obrigatória'),
    })

    try {

      await validationSchema.validate(data, { abortEarly: false })
      console.log("Formulário validado com sucesso!", data)


      const pedidoEditado = {
        capa: data.capa,
        cliente: data.cliente,
        data_criacao: data.data_criacao,
        endereco_entrega: data.endereco_entrega,
        forma_pagamento: data.forma_pagamento,
        itens: pedidoSelecionado.itens,
      }

      const PedidoEditado = await editarPedido(pedidoSelecionado.id, pedidoEditado)
      console.log("Pedido editado com sucesso", PedidoEditado)

      addRequest(PedidoEditado)

    } catch (error) {
      console.error("Erro de validação:")
      if (typeof error === 'string') {
        console.log(error)
      } else if (error.inner && Array.isArray(error.inner)) {
        error.inner.forEach((err) => {
          console.log(err.message)
        });
      } else {
        console.log("Erro inesperado", error)
      }
    }
  }


  const exclusaoPedido = async (data) => {
    try {
      const PedidoExcluido = await excluirPedido(data)
      console.log("Pedido vai ser excluido", PedidoExcluido)
      buscarPedidos();

    } catch (error) {
      console.error("Erro ao excluir pedido:", error)
    }
  }

  useEffect(() => {
    buscarPedidos();
  }, []);

  const mudarAba = async (_, abaSelecionada) => {
    if (abaSelecionada === 0) {
      setPedidoSelecionado(null)
    }
    setAbaAtiva(abaSelecionada);
  };

  const values = useMemo(
    () => ({
      formFiltrosRef,
      formItensRef,
      abaAtiva,
      setAbaAtiva,
      pedidoSelecionado,
      setPedidoSelecionado,
      mudarAba,
      listaPedidos,
      setListaPedidos,
      buscarPedidos,
      addRequest,
      atualizarPedido,
      exclusaoPedido,
      validarCapaPedido,
      validarItens,
      cadastrouPedido,
    }),
    [abaAtiva, pedidoSelecionado, listaPedidos]
  );

  return (
    <PedidosContext.Provider value={values}>{children}</PedidosContext.Provider>
  );
};

export const usePedidos = () => useContext(PedidosContext);

export { PedidosContext }