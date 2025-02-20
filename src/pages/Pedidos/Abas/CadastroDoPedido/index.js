import React from "react";
import { usePedidos } from "../../../../hooks/usePedidos";
import { BoxItems, GridContainer, ToolbarContainer, AreaItem } from "../../../../styles/global";
import { Form } from "@unform/web";
import {
  ContainerPedCampos,
  ContainerPrimeiraLinha,
  ContainerSegundaLinha,
} from './styles';
import Input from "../../../../components/Input";
import BotaoSave from "../../../../components/Button/BotaoSavePed";


export default function CadastroDoPedido() {
  const { formFiltrosRef, pedidoSelecionado, validarCapaPedido} = usePedidos();

  return (
    <BoxItems>
      <GridContainer height="calc(100vh - 200px)">
        <Form ref={formFiltrosRef} onSubmit={validarCapaPedido}>
          <ToolbarContainer>
            <BotaoSave></BotaoSave>
          </ToolbarContainer>
          <BoxItems>
            <ContainerPedCampos>
              <ContainerPrimeiraLinha>
                <AreaItem style={{ width: "100px" }}>
                  <Input
                    name="id"
                    label="Cod Pedido:"
                    disabled={true}
                    defaultValue={pedidoSelecionado ? pedidoSelecionado.id : null}
                    readOnly={pedidoSelecionado ? true : false}
                  />
                </AreaItem>
                <AreaItem>
                  <Input
                    name="capa"
                    label="Descrição Pedido:"
                    defaultValue={pedidoSelecionado ? pedidoSelecionado.capa : null}
                  />
                </AreaItem>
                <AreaItem>
                  <Input
                    name="cliente"
                    label="Cliente:"
                    defaultValue={pedidoSelecionado ? pedidoSelecionado.cliente : null}
                  />
                </AreaItem>
                <AreaItem style={{ width: "30%" }}>
                  <Input
                    name="data_criacao"
                    label="Data Emissão:"
                    defaultValue={pedidoSelecionado ? pedidoSelecionado.data_criacao : null}
                  />
                </AreaItem>
                <AreaItem style={{ width: "30%" }}>
                  <Input
                    name="data_entrega"
                    label="Data entrega:"
                    defaultValue={pedidoSelecionado ? pedidoSelecionado.data_entrega : null}
                  />
                </AreaItem>
                <AreaItem style={{ width: "30%" }}>
                  <Input
                    name="status"
                    label="Status:"
                    defaultValue={pedidoSelecionado ? pedidoSelecionado.status : null}
                  />
                </AreaItem>
              </ContainerPrimeiraLinha>
              <ContainerSegundaLinha>
                <AreaItem>
                  <Input
                    name="endereco_entrega"
                    label="Endereço:"
                    defaultValue={pedidoSelecionado ? pedidoSelecionado.endereco_entrega : null}
                  />
                </AreaItem>
                <AreaItem style={{ width: "50%" }}>
                  <Input
                    name="forma_pagamento"
                    label="Pagamento:"
                    defaultValue={pedidoSelecionado ? pedidoSelecionado.forma_pagamento : null}
                  />
                </AreaItem>
                <AreaItem style={{ width: "90%" }}>
                  <Input
                    name="observacoes"
                    label="Observações:"
                    defaultValue={pedidoSelecionado ? pedidoSelecionado.observacoes : null}
                  />
                </AreaItem>
              </ContainerSegundaLinha>
            </ContainerPedCampos>
          </BoxItems>
        </Form>
      </GridContainer>
    </BoxItems>
  );
}
