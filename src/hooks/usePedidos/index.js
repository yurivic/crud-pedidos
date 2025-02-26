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
import { errorAlertMessage, limparCampos, makeValidation } from "../../utils/funcoes";
import useLoadingStore from "../useLoadingStore";
import { useNavigate } from "react-router-dom";
import { validationSchemaItens, validationSchemaPed } from "../schemas/schema";

const PedidosContext = createContext();

export const PedidosProvider = ({ children }) => {
  const { setIsLoading } = useLoadingStore();
  const formFiltrosRef = useRef(null);
  const formItensRef = useRef(null);
  const [abaAtiva, setAbaAtiva] = useState(0);
  const [pedidoSelecionado, setPedidoSelecionado] = useState(null);
  const [listaPedidos, setListaPedidos] = useState([]);
  const [ itensPedidos, setItensPedidos ] = useState([])
  // const navigate = useNavigate();

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

  const addRequest = () => {
    setListaPedidos((prevPedidos) => [...prevPedidos])
  }

  const validarCapaPedido = async () => {
    try {
      
      const pedidoData = {
        id: formFiltrosRef.current?.getFieldValue("id"),
        capa: formFiltrosRef.current?.getFieldValue("capa"),
        cliente: formFiltrosRef.current?.getFieldValue("cliente"),
        data_criacao: formFiltrosRef.current?.getFieldValue("data_criacao"),
        data_entrega: formFiltrosRef.current?.getFieldValue("data_entrega"),
        endereco_entrega: formFiltrosRef.current?.getFieldValue("endereco_entrega"),
        forma_pagamento: formFiltrosRef.current?.getFieldValue("forma_pagamento"),
        observacoes: formFiltrosRef.current?.getFieldValue("observacoes"),
        itens: null,
      }
      
      const pedidoValidado = await makeValidation(
        validationSchemaPed,
        pedidoData,
        formFiltrosRef
      )

      if (!pedidoValidado) {
        alert("Capa do pedido obrigatória!")
        return false
      }

      const pedidoCadastrado = await cadastrarPedido(pedidoData)

      setAbaAtiva(2)
      setPedidoSelecionado(pedidoCadastrado)
      alert("Capa do pedido salvos com sucesso")


    } catch (error) {

      console.error("Erro ao validar form", error)
      return false

    }
  }

  const validarItens = async () => {
    try {

      const itensData =  {
        id: itensPedidos.length + 1,
        produto: formItensRef.current.getFieldValue("produto"),
        quantidade: formItensRef.current.getFieldValue("quantidade"),
        preco: formItensRef.current.getFieldValue("preco"),
        total: formItensRef.current.getFieldValue("total"),
      }
      
      
      const itensValidados = await makeValidation(
        validationSchemaItens,
        itensData,
        formItensRef
      )

      if (!itensValidados) {
        alert("Itens do pedido obrigatórios!")
        return false
      }

      const novoPedido = {
        itens: [...itensPedidos, itensData], 
      }

      const pedidoEditado = await editarPedido(pedidoSelecionado.id, novoPedido)

      buscarPedidos()
      // addRequest(pedidoEditado)
      setPedidoSelecionado(pedidoEditado)
      setItensPedidos((prevItens) => [...prevItens, itensData]);
      formItensRef.current.reset()

      alert("Item adicionado com sucesso!");
    } catch (error) {

      console.error("Erro ao validar form", error)
      return false

    }
  }

  const exclusaoPedido = async (data) => {
    try {
      console.log(data)
      await excluirPedido(data)
      buscarPedidos()
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
      itensPedidos,
      setItensPedidos,
      buscarPedidos,
      addRequest,
      exclusaoPedido,
      validarItens,
      validarCapaPedido,
    }),
    [abaAtiva, pedidoSelecionado, listaPedidos, itensPedidos]
  );

  return (
    <PedidosContext.Provider value={values}>{children}</PedidosContext.Provider>
  );
};

export const usePedidos = () => useContext(PedidosContext);

export { PedidosContext }