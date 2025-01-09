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
import { errorAlertMessage } from "../../utils/funcoes";
import useLoadingStore from "../useLoadingStore";

const PedidosContext = createContext();

export const PedidosProvider = ({ children }) => {
  const { setIsLoading } = useLoadingStore();
  const formFiltrosRef = useRef(null);
  const [abaAtiva, setAbaAtiva] = useState(0);
  const [pedidoSelecionado, setPedidoSelecionado] = useState(null);
  const [listaPedidos, setListaPedidos] = useState([]);

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

  useEffect(() => {
    buscarPedidos();
  }, []);

  const mudarAba = async (_, abaSelecionada) => {
    setPedidoSelecionado(null);
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
    }),
    [abaAtiva, pedidoSelecionado, listaPedidos]
  );

  return (
    <PedidosContext.Provider value={values}>{children}</PedidosContext.Provider>
  );
};

export const usePedidos = () => useContext(PedidosContext);
