import React, { useEffect } from "react";
import { usePedidos } from "../../../../hooks/usePedidos";
import { GridContainer } from "../../../../styles/global";
import { AgGridReact } from "ag-grid-react";
import localeText from "../../../../utils/localeText";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import EdicaoPedido from "../../../../components/Button/BotaoEditarPed";
import BotaoDeletePed from "../../../../components/Button/BotaoDeletePed";
import { ContainerCellRenderer, Wrapper } from "./styles";
import { formatarData, limparCampos } from "../../../../utils/funcoes";
import { editarPedido } from "../../../../services/Pedidos";

export default function ListagemDePedidos() {
  const {
    formFiltrosRef,
    listaPedidos,
    abaAtiva,
    exclusaoPedido,
    edicaoItensDoPedido,
    setAbaAtiva,
    setPedidoSelecionado,
  } = usePedidos();

  useEffect(() => {
    if (abaAtiva === 0) {
      limparCampos(formFiltrosRef);
    }
  }, [abaAtiva, formFiltrosRef]);

  const gridPedidosDef = [
    {
      field: "",
      headerName: "Ações",
      width: 120,
      sortable: false,
      resizable: true,
      lockVisible: true,
      filter: false,
      cellRenderer: (params, e) => {
        const deletarPedido = () => {
          exclusaoPedido(params.data.id);
        };

        const edicaoPedido = (data) => {
          setAbaAtiva(1);
          setPedidoSelecionado(data);
          formFiltrosRef.current.setFieldValue("id", data.id);
          formFiltrosRef.current.setFieldValue("capa", data.capa);
          formFiltrosRef.current.setFieldValue("cliente", data.cliente);
          formFiltrosRef.current.setFieldValue(
            "data_criacao",
            data.data_criacao
          );
          formFiltrosRef.current.setFieldValue(
            "data_entrega",
            data.data_entrega
          );
          formFiltrosRef.current.setFieldValue(
            "endereco_entrega",
            data.endereco_entrega
          );
          formFiltrosRef.current.setFieldValue(
            "forma_pagamento",
            data.forma_pagamento
          );
          formFiltrosRef.current.setFieldValue("observacoes", data.observacoes);
        };

        return (
          <ContainerCellRenderer style={{ gap: "30px" }}>
            <BotaoDeletePed onDelete={deletarPedido}></BotaoDeletePed>
            <EdicaoPedido
              onEdit={edicaoPedido}
              data={params.data}
            ></EdicaoPedido>
          </ContainerCellRenderer>
        );
      },
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
      valueFormatter: (params) => {
        return formatarData(params.value);
      },
    },
  ];

  return (
    <GridContainer>
      <Wrapper style={{ margin: "16px" }}>
        <GridContainer height="calc(100vh - 200px)">
          <AgGridReact
            columnDefs={gridPedidosDef}
            rowData={listaPedidos}
            localeText={localeText}
          />
        </GridContainer>
      </Wrapper>
    </GridContainer>
  );
}
