import React from "react";
import { BotaoDelete } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { PedidosContext } from "../../hooks/usePedidos";

export default function BotaoDeletePed(props) {

    const { exclusaoPedido } = useContext(PedidosContext)

    const deletarPedido = () => {
        exclusaoPedido(props.data.id)
    }

    return (
        <div>
            <BotaoDelete onClick={deletarPedido}>
                <span>DELET</span>
                <div className="icon">
                    <FontAwesomeIcon icon={faTrash} className="fa-solid fa-trash" />
                </div>
            </BotaoDelete>
        </div>
    )
}
