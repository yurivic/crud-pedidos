import React from "react";
import { Form } from "@unform/web";
import Input from "../../../../components/Input";
import { BoxItems, AreaItem, ToolbarContainer } from "../../../../styles/global";
import BotaoSave from "../../../../components/Button/BotaoSavePed";
import { ContainerItensPedido } from "./styles";
import { usePedidos } from "../../../../hooks/usePedidos";


export default function ItensDoPedido() {

  const { pedidoSelecionado, formItensRef, validarItens, validarEEditarPedido} = usePedidos()

  const itens = pedidoSelecionado?.itens || []

  return (
    <Form ref={formItensRef} onSubmit={validarItens} >
      <ToolbarContainer>
        <BotaoSave />
      </ToolbarContainer>
      <BoxItems fDirection="column">
        {(itens.length > 0 ? itens : [{}]).map((item, index) => (
          <ContainerItensPedido key={item.id || index}> 
            <AreaItem style={{ width: "100px" }}>
              <Input
                name="id"
                label="Código Produto"
                defaultValue={item.id || ''}
              />
            </AreaItem>
            <AreaItem>
              <Input
                name="produto"
                label="Nome Produto"
                defaultValue={item.produto || ''}
              />
            </AreaItem>
            <AreaItem style={{ width: "150px" }}>
              <Input
                name="quantidade"
                label="Quantidade"
                defaultValue={item.quantidade || ''}
              />
            </AreaItem>
            <AreaItem style={{ width: "150px" }}>
              <Input
                name="preco"
                label="Preço Produto"
                defaultValue={item.preco || ''}
              />
            </AreaItem>
            <AreaItem style={{ width: "150px" }}>
              <Input
                name="total"
                label="Total do Pedido"
                defaultValue={item.total || ''}
              />
            </AreaItem>
          </ContainerItensPedido>
        ))}
      </BoxItems>
    </Form>
  );
}