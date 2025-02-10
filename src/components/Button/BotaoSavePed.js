import React from "react";
import { BotaoSavePed } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'

export default function BotaoSave({ onSubmit }) {

    function PedSalvo() {
        onSubmit()
    }

    return(
        <BotaoSavePed onClick={PedSalvo}>
            <FontAwesomeIcon icon={faFloppyDisk} />
        </BotaoSavePed>
    )
}