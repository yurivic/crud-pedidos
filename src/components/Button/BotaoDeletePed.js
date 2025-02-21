import React from "react";
import { BotaoDelete } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { usePedidos } from "../../hooks/usePedidos";

export default function BotaoDeletePed(props) {

    const { exclusaoPedido } = usePedidos()

    const deletarPedido = () => {
        exclusaoPedido(props.data)
    }

    return (
        <div>
            <BotaoDelete onClick={deletarPedido}>
                <div className="icon">
                    <FontAwesomeIcon icon={faTrash} className="fa-solid fa-trash" />
                </div>
            </BotaoDelete>
        </div>
    )
}
