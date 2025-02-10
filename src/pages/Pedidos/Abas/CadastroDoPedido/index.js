import React from "react";
import { usePedidos } from "../../../../hooks/usePedidos";
import { BoxItems, GridContainer } from "../../../../styles/global";
import CamposPedidos from "./camposPedido";


export default function CadastroDoPedido() {
  const { formFiltrosRef, pedidoSelecionado } = usePedidos();

  return (
    <BoxItems>
      <GridContainer height="calc(100vh - 200px)">
          <CamposPedidos pedido={pedidoSelecionado}></CamposPedidos>
      </GridContainer>
    </BoxItems>
  );
}
