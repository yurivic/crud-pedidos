import React from "react";
import { usePedidos } from "../../../../hooks/usePedidos";
import { BoxItems, GridContainer } from "../../../../styles/global";
import { AgGridReact } from "ag-grid-react";
import localeText from "../../../../utils/localeText";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import EdicaoPedido from "../../../../components/Button/BotaoEditarPed";
import BotaoDeletePed from "../../../../components/Button/BotaoDeletePed";


export default function ListagemDePedidos() {
  const { formFiltrosRef, listaPedidos } = usePedidos();

  const gridPedidosDef = [
    {
      field: "",
      headerName: "Ações",
      width: 120,
      sortable: false,
      resizable: true,
      lockVisible: true,
      filter: false,
      cellRenderer: BotaoDeletePed,
    },
    {
      field: "id",
      headerName: "CÓD. PEDIDO",
      width: 160,
      sortable: true,
      resizable: true,
      lockVisible: true,
      filter: true,
    },
    {
      field: "capa",
      headerName: "DESCRIÇÃO",
      minWidth: 160,
      flex: 1,
      sortable: true,
      resizable: true,
      lockVisible: true,
      filter: true,
    },
    {
      field: "data_entrega",
      headerName: "DATA ENTREGA",
      minWidth: 160,
      flex: 1,
      sortable: true,
      resizable: true,
      lockVisible: true,
      filter: true,
    },
    {
      field: "edição_pedido",
      headerName: "EDITAR PEDIDO",
      maxWidth: 135,
      flex: 1,
      sortable: false,
      resizable: false,
      lockVisible: true,
      filter: false,
      cellRenderer: EdicaoPedido,     
    },
];

return (
    <BoxItems>
      <GridContainer>
        <GridContainer height="calc(100vh - 200px)">
          <AgGridReact
            columnDefs={gridPedidosDef}
            rowData={listaPedidos}
            localeText={localeText}
          />
        </GridContainer>
      </GridContainer>
    </BoxItems>
  );
}