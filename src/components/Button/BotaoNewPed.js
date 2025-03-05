import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { DivPedFat, AddButton } from "./styles";
import { usePedidos } from "../../hooks/usePedidos";

const BotaoAdd = () => {
  const { setAbaAtiva, setPedidoSelecionado } = usePedidos();

  const handleAdicionarPedido = () => {
    setAbaAtiva(1);
    setPedidoSelecionado(null);
  };

  return (
    <DivPedFat>
      <AddButton aria-label="Adicionar Pedido" onClick={handleAdicionarPedido}>
        <FontAwesomeIcon icon={faPlus} />
      </AddButton>
    </DivPedFat>
  );
};

export default BotaoAdd;
