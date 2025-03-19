import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { EditPedido } from "./styles";

const EdicaoPedido = ({ onEdit, data }) => {
  const clickEdicao = (event) => {
    event.preventDefault();
    onEdit(data);
  };

  return (
    <div>
      <EditPedido onClick={clickEdicao}>
        <div className="icon">
          <FontAwesomeIcon icon={faPenToSquare} className="fa-pen-to-square" />
        </div>
      </EditPedido>
    </div>
  );
};

export default EdicaoPedido;
