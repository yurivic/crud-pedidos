import React, { useContext } from "react";
import { BotaoSavePed } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { PedidosContext } from "../../hooks/usePedidos";

export default function BotaoSave() {
    
    return(
        <BotaoSavePed type="submit">
            <FontAwesomeIcon icon={faFloppyDisk} />
        </BotaoSavePed>
    )
}