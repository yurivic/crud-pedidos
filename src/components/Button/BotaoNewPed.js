import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { DivBotao, AddButton } from "./styles";
import { PedidosContext } from "../../hooks/usePedidos";


const BotaoAdd = () => {

    const {setAbaAtiva, setPedidoSelecionado, pedidoSelecionado } = useContext(PedidosContext);

    const handleAdicionarPedido = () => {
        setAbaAtiva(1)
        setPedidoSelecionado()
    }

    return (
        <DivBotao>
            <AddButton 
            aria-label="Adicionar Pedido" 
            onClick={handleAdicionarPedido}>
              <FontAwesomeIcon icon={faPlus} />
            </AddButton>
        </DivBotao>
    )

}

export default BotaoAdd;
