import React, { useState } from "react";
import { Form } from "@unform/web";
import Input from "../../../../components/Input";
import { BoxItems, AreaItem, ToolbarContainer } from "../../../../styles/global";
import BotaoSave from "../../../../components/Button/BotaoSavePed";
import { ContainerItensPedido } from "./styles";
import { usePedidos } from "../../../../hooks/usePedidos";

export default function ItensDoPedido() {
  const { pedidoSelecionado, formItensRef, validarItens } = usePedidos();

  const [itens, setItens] = useState(pedidoSelecionado?.itens || []);

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    // Atualiza o estado do item com base no campo alterado
    const updatedItens = [...itens];
    updatedItens[index] = {
      ...updatedItens[index],
      [name]: value,
    };

    // Se os campos quantidade ou preco foram alterados, calcula o total
    if (name === "quantidade" || name === "preco") {
      const quantidade = parseFloat(updatedItens[index].quantidade) || 0;
      const preco = parseFloat(updatedItens[index].preco) || 0;
      updatedItens[index].total = quantidade * preco;
    }

    setItens(updatedItens); // Atualiza o estado dos itens
  };

  return (
    <Form ref={formItensRef} onSubmit={validarItens}>
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
                defaultValue={item.id || ""}
              />
            </AreaItem>
            <AreaItem>
              <Input
                name="produto"
                label="Nome Produto"
                defaultValue={item.produto || ""}
              />
            </AreaItem>
            <AreaItem style={{ width: "150px" }}>
              <Input
                name="quantidade"
                label="Quantidade"
                defaultValue={item.quantidade || ""}
                onChange={(e) => handleChange(e, index, "quantidade")}
              />
            </AreaItem>
            <AreaItem style={{ width: "150px" }}>
              <Input
                name="preco"
                label="Preço Produto"
                defaultValue={item.preco || ""}
                onChange={(e) => handleChange(e, index, "preco")}
              />
            </AreaItem>
            <AreaItem style={{ width: "150px" }}>
              <Input
                name="total"
                label="Total do Pedido"
                defaultValue={item.total || ""}
                readOnly // O campo de total é apenas para exibição, então ele é somente leitura
              />
            </AreaItem>
          </ContainerItensPedido>
        ))}
      </BoxItems>
    </Form>
  );
}
