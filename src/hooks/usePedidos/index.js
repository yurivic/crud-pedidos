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
import { errorAlertMessage, makeValidation } from "../../utils/funcoes";
import useLoadingStore from "../useLoadingStore";
import { useNavigate } from "react-router-dom";
import { validationSchemaItens, validationSchemaPed } from "../schemas/schema";

const PedidosContext = createContext();

export const PedidosProvider = ({ children }) => {
  const { setIsLoading } = useLoadingStore();
  const formFiltrosRef  = useRef(null);
  const formItensRef  = useRef(null);
  const [abaAtiva, setAbaAtiva] = useState(0);
  const [pedidoSelecionado, setPedidoSelecionado] = useState(null);
  const [listaPedidos, setListaPedidos] = useState([]);
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
        itens: [],
      }

      const pedidoValidado = await makeValidation(
        validationSchemaPed,
        pedidoData,
        formFiltrosRef
      )

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
      const itensData = 
        {
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
        return false
      }
  
      return { itensData }
    } catch (error) {
      console.error("Erro ao validar form", error);
      return false
    }
  };
  
  const validarECadastrarPedido = async () => {
    try {
      
      const capaPedido = await validarCapaPedido()
      if (!capaPedido || !capaPedido.pedidoData) {
        console.error("Erro: 'pedidoData' está indefinido")
        return
      } else {
        console.log("Capa do pedido validada:", capaPedido)
      }
      
      const { pedidoData } = capaPedido;
  
      
      const itensPedido = await validarItens()
      if (!itensPedido || !itensPedido.itensData) {
        return
      } else {
        console.log("Itens do pedido validados:", itensPedido)
      }

      const { itensData } = itensPedido
  
      
      pedidoData.itens = itensData
  
      
      const pedidoCriado = await cadastrarPedido(pedidoData)
      console.log("Cadastrou o pedido com sucesso", pedidoCriado)
  
      addRequest(pedidoCriado)
      setPedidoSelecionado(pedidoData)
    } catch (error) {
      console.error("Erro de validação:", error)
    }
  }

  const validarEEditarPedido = async () => {
    try {
      
      const pedidoAtual = { ...pedidoSelecionado }
      const itensAtual = pedidoSelecionado.itens ? [...pedidoSelecionado.itens] : [];
  
      const capaPedido = await validarCapaPedido()
      if (!capaPedido || !capaPedido.pedidoData) {
        console.error("Erro: 'pedidoData' está indefinido");
        pedidoSelecionado = pedidoAtual;
        return;
      } else {
        console.log("Capa do pedido validada:", capaPedido)
      }
  
      const { pedidoData } = capaPedido
  
      const itensPedido = await validarItens()
      if (!itensPedido || !itensPedido.itensData) {
        console.log("Itens não validados, mantendo os itens atuais.")

        pedidoData.itens = itensAtual
      } else {
        console.log("Itens do pedido validados:", itensPedido)
        const { itensData } = itensPedido
        pedidoData.itens = itensData
      }

      const pedidoEditado = await editarPedido(pedidoSelecionado.id, pedidoData)
      console.log("Pedido editado com sucesso", pedidoEditado)

      
      addRequest(pedidoEditado)
      setPedidoSelecionado(pedidoEditado)
  
    } catch (error) {
      console.error("Erro de validação:", error)
    }
  };

  const exclusaoPedido = async (data) => {
    try {
      const PedidoExcluido = await excluirPedido(data)
      console.log("Pedido vai ser excluido", PedidoExcluido)
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
      buscarPedidos,
      addRequest,
      exclusaoPedido,
      validarECadastrarPedido,
      validarEEditarPedido,
    }),
    [abaAtiva, pedidoSelecionado, listaPedidos]
  );

  return (
    <PedidosContext.Provider value={values}>{children}</PedidosContext.Provider>
  );
};

export const usePedidos = () => useContext(PedidosContext);

export { PedidosContext }