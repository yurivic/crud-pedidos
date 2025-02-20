import React from "react";
import { usePedidos } from "../../../../hooks/usePedidos";
import { BoxItems, GridContainer } from "../../../../styles/global";
import { AgGridReact } from "ag-grid-react";
import localeText from "../../../../utils/localeText";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import EdicaoPedido from "../../../../components/Button/BotaoEditarPed";
import BotaoDeletePed from "../../../../components/Button/BotaoDeletePed";
import { ContainerCellRenderer } from "./styles";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f9f9f9;     // cor de fundo
  border-radius: 12px;            // borda arredondada
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);  // sombra
  padding: 15px;                  // espaço interno
  margin-top: 1px;               // margem superior
`;

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
      cellRenderer: (params) => {
        return (
          <ContainerCellRenderer style={{ gap: "30px" }}>
            <BotaoDeletePed data={params.data.id}></BotaoDeletePed>
            <EdicaoPedido data={params.data}></EdicaoPedido>
          </ContainerCellRenderer>
        )
      }
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
    // {
    //   field: "edição_pedido",
    //   headerName: "EDITAR PEDIDO",
    //   maxWidth: 135,
    //   flex: 1,
    //   sortable: false,
    //   resizable: false,
    //   lockVisible: true,
    //   filter: false,
    //   cellRenderer: EdicaoPedido,     
    // },
  ];

  return (
    <BoxItems>
      <GridContainer>
        <Wrapper>
          <GridContainer height="calc(100vh - 200px)">
            <AgGridReact
              columnDefs={gridPedidosDef}
              rowData={listaPedidos}
              localeText={localeText}
            />
          </GridContainer>
        </Wrapper>
      </GridContainer>
    </BoxItems>
  );
}