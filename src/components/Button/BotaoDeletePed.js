import React from "react";
import { BotaoDelete } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function BotaoDeletePed({ onDelete }) {
  return (
    <div>
      <BotaoDelete onClick={onDelete}>
        <div className="icon">
          <FontAwesomeIcon icon={faTrash} className="fa-solid fa-trash" />
        </div>
      </BotaoDelete>
    </div>
  );
}
