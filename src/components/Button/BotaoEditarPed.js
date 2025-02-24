import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { EditPedido } from './styles';
import {usePedidos } from '../../hooks/usePedidos';

const EdicaoPedido = (props) => {

  const { setAbaAtiva, setPedidoSelecionado, formFiltrosRef} = usePedidos()

  const EditarPedido = () => {
    setAbaAtiva(1)
    setPedidoSelecionado(props.data)
    formFiltrosRef.current.setFieldValue('id', props.data.id)
    formFiltrosRef.current.setFieldValue('capa', props.data.capa)
    formFiltrosRef.current.setFieldValue('cliente', props.data.cliente)
    formFiltrosRef.current.setFieldValue('data_criacao', props.data.data_criacao)
    formFiltrosRef.current.setFieldValue('data_entrega', props.data.data_entrega)
    formFiltrosRef.current.setFieldValue('endereco_entrega', props.data.endereco_entrega)
    formFiltrosRef.current.setFieldValue('forma_pagamento', props.data.forma_pagamento)
    formFiltrosRef.current.setFieldValue('observacoes', props.data.observacoes)
  }

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
