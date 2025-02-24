import React, {useEffect} from "react";
import { usePedidos } from "../../../../hooks/usePedidos";
import { BoxItems, GridContainer } from "../../../../styles/global";
import { AgGridReact } from "ag-grid-react";
import localeText from "../../../../utils/localeText";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import EdicaoPedido from "../../../../components/Button/BotaoEditarPed";
import BotaoDeletePed from "../../../../components/Button/BotaoDeletePed";
import { ContainerCellRenderer, Wrapper } from "./styles";
import { limparCampos } from "../../../../utils/funcoes";

export default function ListagemDePedidos() {
  const { formFiltrosRef, listaPedidos, abaAtiva, formItensRef } = usePedidos();

  useEffect(() => {
    if(abaAtiva === 0) {
      limparCampos(formFiltrosRef, formItensRef)
    }
  }, [abaAtiva])

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