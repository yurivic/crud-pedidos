/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { listarPedidos } from "../../services/Pedidos";
import * as yup from 'yup'
import { cadastrarPedido, editarPedido } from "../../services/Pedidos";
import { errorAlertMessage } from "../../utils/funcoes";
import useLoadingStore from "../useLoadingStore";

const PedidosContext = createContext();

export const PedidosProvider = ({ children }) => {
  const { setIsLoading } = useLoadingStore();
  const formFiltrosRef = useRef(null);
  const [abaAtiva, setAbaAtiva] = useState(0);
  const [pedidoSelecionado, setPedidoSelecionado] = useState(null);
  const [listaPedidos, setListaPedidos] = useState([]);

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

  const onSubmit = async () => {

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

      const novoPedido = {
        capa: data.capa,
        cliente: data.cliente,
        data_criacao: data.data_criacao,
        endereco_entrega: data.endereco_entrega,
        forma_pagamento: data.forma_pagamento,
        itens: []
      }

      const PedidoCriado = await cadastrarPedido(novoPedido)
      console.log("Pedido cadastrado com sucesso", PedidoCriado)

      addRequest(PedidoCriado)
      setPedidoSelecionado(data)

    } catch (error) {
      console.error("Erro de validação:");
      if (typeof error === 'string') {
        console.log(error)
      } else if (error.inner && Array.isArray(error.inner)) {
        error.inner.forEach((err) => {
          console.log(err.message)
        })
      } else {
        console.log("Erro inesperado", error)
      }
    }
  }

  const atualizarPedido = async () => {
    const data = Object.fromEntries(new FormData(formFiltrosRef.current));
  
    let validationSchema = yup.object().shape({
      capa: yup.string().required("Capa do Pedido é obrigatório"),
      cliente: yup.string().required("Cliente é obrigatório"),
      data_criacao: yup.date().nullable().typeError('Data inválida'),
      endereco_entrega: yup.string().required("Endereço é obrigatório"),
      forma_pagamento: yup.string().required('Forma de pagamento obrigatória'),
    });
  
    try {
      
      await validationSchema.validate(data, { abortEarly: false });
      console.log("Formulário validado com sucesso!", data);
  
      
      const pedidoEditado = {
        capa: data.capa,
        cliente: data.cliente,
        data_criacao: data.data_criacao,
        endereco_entrega: data.endereco_entrega,
        forma_pagamento: data.forma_pagamento,
        itens: pedidoSelecionado.itens, 
      };
  
      
      const PedidoEditado = await editarPedido(pedidoSelecionado.id, pedidoEditado);
      console.log("Pedido editado com sucesso", PedidoEditado);
  
      
      addRequest(PedidoEditado);
      setPedidoSelecionado(data); 
  
    } catch (error) {
      console.error("Erro de validação:");
      if (typeof error === 'string') {
        console.log(error);
      } else if (error.inner && Array.isArray(error.inner)) {
        error.inner.forEach((err) => {
          console.log(err.message);
        });
      } else {
        console.log("Erro inesperado", error);
      }
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
      abaAtiva,
      setAbaAtiva,
      pedidoSelecionado,
      setPedidoSelecionado,
      mudarAba,
      listaPedidos,
      setListaPedidos,
      buscarPedidos,
      addRequest,
      onSubmit,
      atualizarPedido,
    }),
    [abaAtiva, pedidoSelecionado, listaPedidos]
  );

  return (
    <PedidosContext.Provider value={values}>{children}</PedidosContext.Provider>
  );
};

export const usePedidos = () => useContext(PedidosContext);

export { PedidosContext }