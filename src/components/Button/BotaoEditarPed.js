import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { EditPedido } from './styles';
import {usePedidos } from '../../hooks/usePedidos';
import { limparCampos } from '../../utils/funcoes';

const EdicaoPedido = (props) => {

  const { setAbaAtiva, setPedidoSelecionado, pedidoSelecionado, formFiltrosRef } = usePedidos()

  const EditarPedido = () => {
    setAbaAtiva(1)
    setPedidoSelecionado(props.data)
  };

  return (
    <div>
      <EditPedido onClick={EditarPedido}>
        <div className="icon">
          <FontAwesomeIcon icon={faPenToSquare} className="fa-pen-to-square" />
        </div>
      </EditPedido>
    </div>
  );
};

export default EdicaoPedido;
