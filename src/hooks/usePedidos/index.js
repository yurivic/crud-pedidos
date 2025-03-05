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
  excluirPedido,
  editarItem,
  excluirItem,
} from "../../services/Pedidos";
import { errorAlertMessage, makeValidation } from "../../utils/funcoes";
import useLoadingStore from "../useLoadingStore";
import { validationSchemaItens, validationSchemaPed } from "../schemas/schema";
import { toast } from "react-toastify";

const PedidosContext = createContext();

export const PedidosProvider = ({ children }) => {
  const { setIsLoading } = useLoadingStore();
  const formFiltrosRef = useRef(null);
  const formItensRef = useRef(null);
  const [abaAtiva, setAbaAtiva] = useState(0);
  const [pedidoSelecionado, setPedidoSelecionado] = useState(null);
  const [listaPedidos, setListaPedidos] = useState([]);
  const [itensPedidos, setItensPedidos] = useState([]);

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

  const gridPedidos = () => {
    setListaPedidos((prevPedidos) => [...prevPedidos]);
  };

  const validarCapaPedido = async () => {
    try {
      const pedidoData = {
        id: formFiltrosRef.current?.getFieldValue("id"),
        capa: formFiltrosRef.current?.getFieldValue("capa"),
        cliente: formFiltrosRef.current?.getFieldValue("cliente"),
        data_criacao: formFiltrosRef.current?.getFieldValue("data_criacao"),
        data_entrega: formFiltrosRef.current?.getFieldValue("data_entrega"),
        endereco_entrega:
          formFiltrosRef.current?.getFieldValue("endereco_entrega"),
        forma_pagamento:
          formFiltrosRef.current?.getFieldValue("forma_pagamento"),
        observacoes: formFiltrosRef.current?.getFieldValue("observacoes"),
        itens: null,
      };

      const pedidoValidado = await makeValidation(
        validationSchemaPed,
        pedidoData,
        formFiltrosRef
      );

      if (!pedidoValidado) {
        alert("Capa do pedido obrigatória!");
        return false;
      }

      const pedidoCadastrado = await cadastrarPedido(pedidoData);

      setAbaAtiva(2);
      setPedidoSelecionado(pedidoCadastrado);
    } catch (error) {
      console.error("Erro ao validar form", error);
      return false;
    }
  };

  const validarItens = async () => {
    try {
      const itensData = {
        id: itensPedidos.length + 1,
        produto: formItensRef.current.getFieldValue("produto"),
        quantidade: parseFloat(
          formItensRef.current.getFieldValue("quantidade")
        ),
        preco: parseFloat(formItensRef.current.getFieldValue("preco")),
        total: parseFloat(formItensRef.current.getFieldValue("total")),
      };

      const itensValidados = await makeValidation(
        validationSchemaItens,
        itensData,
        formItensRef
      );

      if (!itensValidados) {
        alert("Itens do pedido obrigatórios!");
        return false;
      }

      const novoPedido = {
        itens: [...itensPedidos, itensData],
      };

      const pedidoEditado = await editarPedido(
        pedidoSelecionado.id,
        novoPedido
      );

      buscarPedidos();
      gridPedidos(pedidoEditado);
      setPedidoSelecionado(pedidoEditado);
      setItensPedidos((prevItens) => [...prevItens, itensData]);
      formItensRef.current.reset();

      alert("Item adicionado com sucesso!");
    } catch (error) {
      console.error("Erro ao validar form", error);
      return false;
    }
  };

  const editarPedido = (props) => {
    setAbaAtiva(1);
    setPedidoSelecionado(props.data);
    formFiltrosRef.current.setFieldValue("id", props.data.id);
    formFiltrosRef.current.setFieldValue("capa", props.data.capa);
    formFiltrosRef.current.setFieldValue("cliente", props.data.cliente);
    formFiltrosRef.current.setFieldValue(
      "data_criacao",
      props.data.data_criacao
    );
    formFiltrosRef.current.setFieldValue(
      "data_entrega",
      props.data.data_entrega
    );
    formFiltrosRef.current.setFieldValue(
      "endereco_entrega",
      props.data.endereco_entrega
    );
    formFiltrosRef.current.setFieldValue(
      "forma_pagamento",
      props.data.forma_pagamento
    );
    formFiltrosRef.current.setFieldValue("observacoes", props.data.observacoes);
  };

  const exclusaoPedido = async (data) => {
    try {
      await excluirPedido(data);
      toast.success("Campos obrigatórios");
      gridPedidos();
      buscarPedidos();
    } catch (error) {
      console.error("Erro ao excluir pedido:", error);
    }
  };

  const exclusaoItem = async (data) => {
    try {
      await excluirItem(data);
      setItensPedidos();
    } catch (error) {
      console.error("Erro ao excluir item da grid", error);
    }
  };

  const edicaoItem = async (id, novosDados) => {
    try {
      const itensAtualizados = await editarItem(id, novosDados);
      setItensPedidos(itensAtualizados);
    } catch (error) {
      console.error("Erro ao editar item:", error);
    }
  };

  const calcularTotal = () => {
    if (formItensRef.current) {
      const quantidade = parseFloat(
        formItensRef.current.getFieldValue("quantidade")
      );
      const preco = parseFloat(formItensRef.current.getFieldValue("preco"));

      const total = quantidade * preco;

      formItensRef.current.setFieldValue("total", total.toFixed(2));
    }
  };

  useEffect(() => {
    buscarPedidos();
  }, []);

  const mudarAba = async (_, abaSelecionada) => {
    if (abaSelecionada === 0) {
      setPedidoSelecionado(null);
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
      gridPedidos,
      exclusaoPedido,
      validarItens,
      validarCapaPedido,
      calcularTotal,
      exclusaoItem,
      edicaoItem,
      editarPedido,
    }),
    [abaAtiva, pedidoSelecionado, listaPedidos, itensPedidos]
  );

  return (
    <PedidosContext.Provider value={values}>{children}</PedidosContext.Provider>
  );
};

export const usePedidos = () => useContext(PedidosContext);
