import React from "react";
import { Form } from "@unform/web";
import Input from "../../../../components/Input";
import { BoxItems, AreaItem, ToolbarContainer } from "../../../../styles/global";
import BotaoSave from "../../../../components/Button/BotaoSavePed";
import { ContainerItensPedido } from "./styles";
import { usePedidos } from "../../../../hooks/usePedidos";


export default function ItensDoPedido() {

  const { pedidoSelecionado, formItensRef, validarItens, cadastrouPedido } = usePedidos()

  return (
    <Form ref={formItensRef} onSubmit={cadastrouPedido}>
      <ToolbarContainer>
        <BotaoSave></BotaoSave>
      </ToolbarContainer>
      <BoxItems fDirection="column">
        {Array.isArray(pedidoSelecionado?.itens) && pedidoSelecionado.itens.map((item) => (
          <ContainerItensPedido key={item.id}>
            <AreaItem style={{ width: "100px" }}>
              <Input
                name="id"
                label="Código Produto"
                defaultValue={item.id}
                readOnly
              />
            </AreaItem>
            <AreaItem>
              <Input
                name="produto"
                label="Nome Produto"
                defaultValue={item.produto}
              />
            </AreaItem>
            <AreaItem style={{ width: "150px" }}>
              <Input
                name="quantidade"
                label="Quantidade"
                defaultValue={item.quantidade}
              />
            </AreaItem>
            <AreaItem style={{ width: "150px" }}>
              <Input
                name="preco"
                label="Preço Produto"
                defaultValue={item.preco}
              />
            </AreaItem>
            <AreaItem style={{ width: "150px" }}>
              <Input
                name="total"
                label="Total do Pedido"
                defaultValue={item.total}
              />
            </AreaItem>
          </ContainerItensPedido>
        ))}
      </BoxItems>
    </Form>
  )
}
