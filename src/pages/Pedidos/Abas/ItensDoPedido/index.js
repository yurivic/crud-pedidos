import React, { useState, useEffect } from "react";
import { Form } from "@unform/web";
import Input from "../../../../components/Input";
import { AgGridReact } from "ag-grid-react";
import { BoxItems, AreaItem } from "../../../../styles/global";
import BotaoSave from "../../../../components/Button/BotaoSavePed";
import { ContainerItensPedido } from "./styles";
import { usePedidos } from "../../../../hooks/usePedidos";
import { DivPedFat } from "../../../../components/Button/styles";
import { ContainerPedCampos } from "../CadastroDoPedido/styles";
import { Wrapper } from "../ListagemDePedidos/styles";
import localeText from "../../../../utils/localeText";

export default function ItensDoPedido() {
  const { pedidoSelecionado, formItensRef, validarItens, itensPedidos, setItensPedidos } = usePedidos()

  useEffect(() => {
    if (pedidoSelecionado && pedidoSelecionado.itens) {
      setItensPedidos(pedidoSelecionado.itens)
    } else {
      setItensPedidos([])
    }
  }, [pedidoSelecionado])

  const gridItensDef = [
    {
      field: "",
      headerName: "Ações",
      width: 160,
      sortable: true,
      resizable: true,
      lockVisible: true,
      filter: true,
    },
    {
      field: "id",
      headerName: "Cod Produto",
      width: 130,
      sortable: true,
      resizable: true,
      lockVisible: true,
      filter: true,
    },
    {
      field: "produto",
      headerName: "Desc Produto",
      width: 250,
      sortable: true,
      resizable: true,
      lockVisible: true,
      filter: true,
    },
    {
      field: "quantidade",
      headerName: "Qtd Produto",
      width: 160,
      sortable: true,
      resizable: true,
      lockVisible: true,
      filter: true,
    },
    {
      field: "preco",
      headerName: "Preço Produto",
      width: 160,
      sortable: true,
      resizable: true,
      lockVisible: true,
      filter: true,
    },
    {
      field: "total",
      headerName: "Total Produto",
      width: 160,
      sortable: true,
      resizable: true,
      lockVisible: true,
      filter: true,
    }
  ]

  return (
    <Form ref={formItensRef} onSubmit={validarItens}>
      <DivPedFat>
        <BotaoSave />
      </DivPedFat>
      <Wrapper style={{ margin: "16px auto", width: '75%', display: 'flex', justifyContent: 'center' }}>
        <ContainerPedCampos style={{ height: 'calc(100vh - 180px)', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <BoxItems fDirection="column" style={{ width: '100%' }}>
            <ContainerItensPedido style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
              <AreaItem style={{ width: "100px" }}>
                <Input
                  name="id"
                  label="Código Produto"
                  readOnly
                />
              </AreaItem>
              <AreaItem style={{ flex: 1, margin: '0 16px' }}>
                <Input
                  name="produto"
                  label="Nome Produto"
                />
              </AreaItem>
              <AreaItem style={{ width: "150px" }}>
                <Input
                  name="quantidade"
                  label="Quantidade"
                />
              </AreaItem>
              <AreaItem style={{ width: "150px" }}>
                <Input
                  name="preco"
                  label="Preço Produto"
                />
              </AreaItem>
              <AreaItem style={{ width: "150px" }}>
                <Input
                  name="total"
                  label="Total do Pedido"
                />
              </AreaItem>
            </ContainerItensPedido>
          </BoxItems>
          <div style={{ width: '100%', height: 'calc(100vh - 100px)', marginTop: '16px' }}>
            <AgGridReact
              style={{ height: '100%', width: '100%' }}
              columnDefs={gridItensDef}
              rowData={itensPedidos}
              localeText={localeText}
            />
          </div>
        </ContainerPedCampos>
      </Wrapper>
    </Form>
  )
}
