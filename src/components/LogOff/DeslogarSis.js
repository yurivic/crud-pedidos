import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { BotaoDeslogar} from "./style";
import { useNavigate } from "react-router-dom";

export default function DeslogarSistema() {
    
    const navegar = useNavigate()

    const EventoDeslogar = () => {
        navegar('/')
    }
    
    return (

        <div>
            <BotaoDeslogar onClick={EventoDeslogar}>
                <FontAwesomeIcon icon={faRightToBracket} className="icon-rotate"/>
            </BotaoDeslogar>
        </div>

    )
}