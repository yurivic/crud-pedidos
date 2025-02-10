import {
  StyleInput,
  StyleLabel,
  StyleLabelAndInput,
  InputPedido,
  LabelPedido,
  PrimeiraLinha,
  CapaPedido,
  EnderecoPedido,
  SelectFormaPagamento,
  SegundaLinha,
  FormaPag,
} from "./styles";
import { ToolbarContainer } from "../../../../styles/global";
import React, { useContext } from "react";
import { AreaItem } from "../../../../styles/global";
import { PedidosContext } from "../../../../hooks/usePedidos";
import BotaoSave from "../../../../components/Button/BotaoSavePed";


export default function CamposPedidos({pedido}) {
  // TODO: utilizar função onSubmit
  const { onSubmit, formFiltrosRef } = useContext(PedidosContext)

  return (
    <AreaItem>
      <form ref={formFiltrosRef} onSubmit={(e) => {
        e.preventDefault()
      }}>
        <ToolbarContainer>
          <BotaoSave onSubmit={onSubmit} />
        </ToolbarContainer>
        <PrimeiraLinha>
          <StyleLabelAndInput>
            <StyleLabel>
              <LabelPedido htmlFor="codigoPedido">Nro. Pedido</LabelPedido>
            </StyleLabel>
            <StyleInput>
              <InputPedido
                type="text"
                id="codigoPedido"
                placeholder="Nro. Pedido"
                disabled="true"
                value={pedido ? pedido.id : ""}
                readOnly={pedido ? true : false}
              ></InputPedido>
            </StyleInput>
          </StyleLabelAndInput>

          <CapaPedido>
            <StyleLabel>
              <LabelPedido htmlFor="capaPedido">Capa do Pedido</LabelPedido>
            </StyleLabel>
            <StyleInput>
              <InputPedido
                type="text"
                id="capaPedido"
                name="capa"
                defaultValue={pedido ? pedido.capa : ""}
                placeholder="Capa do Pedido"
              />
            </StyleInput>
          </CapaPedido>

          <StyleLabelAndInput>
            <StyleLabel>
              <LabelPedido htmlFor="dataCriacao">Data do Pedido</LabelPedido>
            </StyleLabel>
            <StyleInput>
              <InputPedido
                type="date"
                id="dataCriacao"
                name="data_criacao"
                defaultValue={pedido ? pedido.data_criacao : ""}
              />
            </StyleInput>
          </StyleLabelAndInput>

          <StyleLabelAndInput>
            <StyleLabel>
              <LabelPedido htmlFor="statusPedido">Situação</LabelPedido>
            </StyleLabel>
            <InputPedido
              type="text"
              name="situacao"
              disabled="true"
              defaultValue={pedido ? pedido.status : ""}
              id="situacao"
            />
          </StyleLabelAndInput>

          <EnderecoPedido>
            <StyleLabel>
              <LabelPedido htmlFor="enderecoPedido">Endereço Pedido</LabelPedido>
            </StyleLabel>
            <StyleInput>
              <InputPedido
                type="text"
                id="enderecoPedido"
                name="endereco_entrega"
                defaultValue={pedido ? pedido.endereco_entrega : ""}
                placeholder="Endereço do Pedido"
              />
            </StyleInput>
          </EnderecoPedido>
        </PrimeiraLinha>

        <SegundaLinha>
          <FormaPag>
            <StyleLabel>
              <LabelPedido htmlFor="formaPagamento">
                Forma de Pagamento
              </LabelPedido>
            </StyleLabel>
            <InputPedido
              type="text"
              id="capaPedido"
              name="forma_pagamento"
              defaultValue={pedido ? pedido.forma_pagamento : ""}
              placeholder="Forma Pagamento"
            />
          </FormaPag>

          <FormaPag>
            <StyleLabel>
              <LabelPedido htmlFor="cliente">Cliente</LabelPedido>
            </StyleLabel>
            <StyleInput>
              <InputPedido
                type="text"
                id="cliente"
                placeholder="cliente"
                name="cliente"
                defaultValue={pedido ? pedido.cliente : ""}
              ></InputPedido>
            </StyleInput>
          </FormaPag>
        </SegundaLinha>
        {/* <div className="campo">
        <label htmlFor="observacaoPedido">Observação do Pedido</label>
        <textarea id="observacaoPedido" placeholder="Observação do Pedido" />
        </div> */}
      </form>
    </AreaItem>
  );
}
