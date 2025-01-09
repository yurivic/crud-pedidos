import React from "react";
import { usePedidos } from "../../../../hooks/usePedidos";

export default function ItensDoPedido() {
  const { formFiltrosRef } = usePedidos();

  return <h1>Itens</h1>;
}
