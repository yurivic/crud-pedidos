import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { EditPedido } from './styles';
import { PedidosContext } from '../../hooks/usePedidos';

const EdicaoPedido = (props) => {

  const { setAbaAtiva, setPedidoSelecionado, atualizarPedido } = useContext(PedidosContext);

  const pedido = props.data

  const EditarPedido = () => {
    setAbaAtiva(1)
    setPedidoSelecionado(pedido)
  }

  return (
    <div>
      <EditPedido onClick={EditarPedido}>
        <span>EDIT</span>
        <div className="icon">
          <FontAwesomeIcon icon={faPenToSquare} className="fa-pen-to-square" />
        </div>
      </EditPedido>
    </div>
  );
};

export default EdicaoPedido;
