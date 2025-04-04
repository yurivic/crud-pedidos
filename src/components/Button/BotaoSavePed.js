import React from "react";
import { BotaoSavePed } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { usePedidos } from "../../hooks/usePedidos";

export default function BotaoSave() {
  return (
    <BotaoSavePed type="submit">
      <FontAwesomeIcon icon={faFloppyDisk} />
    </BotaoSavePed>
  );
}
