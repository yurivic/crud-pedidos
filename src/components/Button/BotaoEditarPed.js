import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { EditPedido } from "./styles";

const EdicaoPedido = ({ onEdit, data }) => {
  return (
    <div>
      <EditPedido onClick={() => onEdit(data)}>
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
