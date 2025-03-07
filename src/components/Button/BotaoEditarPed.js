import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { EditPedido } from "./styles";
import "react-toastify/dist/ReactToastify.css";
import { usePedidos } from "../../hooks/usePedidos";

const EdicaoPedido = (props) => {
  const { edicaoPedido } = usePedidos();

  return (
    <div>
      <EditPedido onClick={() => edicaoPedido(props)}>
        <div className="icon">
          <FontAwesomeIcon
            type="button"
            icon={faPenToSquare}
            className="fa-pen-to-square"
          />
        </div>
      </EditPedido>
    </div>
  );
};

export default EdicaoPedido;
