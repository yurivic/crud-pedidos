import React, { useEffect } from "react";
import { Form } from "@unform/web";
import Input from "../../../../components/Input";
import { AgGridReact } from "ag-grid-react";
import { BoxItems, AreaItem } from "../../../../styles/global";
import BotaoSave from "../../../../components/Button/BotaoSavePed";
import { ContainerItensPedido } from "./styles";
import { usePedidos } from "../../../../hooks/usePedidos";
import { DivPedFat } from "../../../../components/Button/styles";
import { ContainerPedCampos } from "../CadastroDoPedido/styles";
import { ContainerCellRenderer, Wrapper } from "../ListagemDePedidos/styles";
import localeText from "../../../../utils/localeText";
import { formatarMoeda } from "../../../../utils/funcoes";
import BotaoDeletePed from "../../../../components/Button/BotaoDeletePed";
import EdicaoPedido from "../../../../components/Button/BotaoEditarPed";

export default function ItensDoPedido() {
  const {
    pedidoSelecionado,
    formItensRef,
    validarItens,
    itensPedidos,
    setItensPedidos,
    calcularTotal,
    excluirItensDoPedido,
    edicaoItensDoPedido,
    setPedidoSelecionado,
    formFiltrosRef,
    setAbaAtiva,
  } = usePedidos();

  useEffect(() => {
    if (pedidoSelecionado && pedidoSelecionado.itens) {
      setItensPedidos(pedidoSelecionado.itens);
    } else {
      setItensPedidos([]);
    }
  }, [pedidoSelecionado, setItensPedidos]);

  const gridItensDef = [
    {
      field: "",
      headerName: "Ações",
      width: 160,
      sortable: true,
      resizable: true,
      lockVisible: true,
      filter: true,
      cellRenderer: (params) => {
        const itemId = params.data.id;
        const pedidoId = pedidoSelecionado?.id;

        const deletarItens = async (e) => {
          e.preventDefault();
          await excluirItensDoPedido(pedidoId, itemId);
        };

        return (
          <ContainerCellRenderer style={{ gap: "30px" }}>
            <BotaoDeletePed onDelete={deletarItens}></BotaoDeletePed>
            <EdicaoPedido></EdicaoPedido>
          </ContainerCellRenderer>
        );
      },
    },
    {
      field: "id",
      headerName: "Cod Produto",
      width: 160,
      sortable: true,
      resizable: true,
      lockVisible: true,
      filter: true,
      cellStyle: { textAlign: "center" },
    },
    {
      field: "produto",
      headerName: "Desc Produto",
      width: 160,
      sortable: true,
      resizable: true,
      lockVisible: true,
      filter: true,
      flex: 1,
    },
    {
      field: "quantidade",
      headerName: "Qtd Produto",
      width: 160,
      sortable: true,
      resizable: true,
      lockVisible: true,
      filter: true,
      cellStyle: { textAlign: "right" },
    },
    {
      field: "preco",
      headerName: "Preço Produto",
      width: 160,
      sortable: true,
      resizable: true,
      lockVisible: true,
      filter: true,
      cellStyle: { textAlign: "right" },
      valueFormatter: (params) => {
        return formatarMoeda(params.value);
      },
    },
    {
      field: "total",
      headerName: "Total Pedido",
      width: 160,
      sortable: true,
      resizable: true,
      lockVisible: true,
      filter: true,
      cellStyle: { textAlign: "right" },
      valueFormatter: (params) => {
        return formatarMoeda(params.value);
      },
    },
  ];

  return (
    <>
      <Form onSubmit={validarItens} ref={formItensRef}>
        <DivPedFat>
          <BotaoSave />
        </DivPedFat>
        <Wrapper style={{ margin: "16px" }}>
          <ContainerPedCampos
            style={{
              height: "calc(100vh - 180px)",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <BoxItems fDirection="column" style={{ width: "100%" }}>
              <ContainerItensPedido
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <AreaItem style={{ width: "0px" }}>
                  <Input name="id" label="Código Produto" readOnly />
                </AreaItem>
                <AreaItem style={{ width: "200px", margin: "0 16px" }}>
                  <Input name="produto" label="Nome Produto" />
                </AreaItem>
                <AreaItem style={{ width: "0px" }}>
                  <Input
                    name="quantidade"
                    label="Quantidade"
                    onChange={calcularTotal}
                  />
                </AreaItem>
                <AreaItem style={{ width: "0px" }}>
                  <Input
                    name="preco"
                    label="Preço Produto"
                    onChange={calcularTotal}
                  />
                </AreaItem>
                <AreaItem style={{ width: "0px" }}>
                  <Input name="total" label="Total do Pedido" />
                </AreaItem>
              </ContainerItensPedido>
            </BoxItems>
            <div
              style={{
                width: "100%",
                height: "calc(100vh - 100px)",
                marginTop: "16px",
              }}
            >
              <AgGridReact
                columnDefs={gridItensDef}
                rowData={itensPedidos}
                localeText={localeText}
              />
            </div>
          </ContainerPedCampos>
        </Wrapper>
      </Form>
    </>
  );
}
