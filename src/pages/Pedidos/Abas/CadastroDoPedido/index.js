import React from "react";
import {
  ContainerPedCampos,
  ContainerPrimeiraLinha,
  ContainerSegundaLinha,
} from './styles';
import { usePedidos } from "../../../../hooks/usePedidos";
import { BoxItems, GridContainer, ToolbarContainer, AreaItem } from "../../../../styles/global";
import { Form } from "@unform/web";
import Input from "../../../../components/Input";
import BotaoSave from "../../../../components/Button/BotaoSavePed";
import TesteDeSelect from "../../../../components/ReactSelect";

export default function CadastroDoPedido() {
  const { formFiltrosRef, pedidoSelecionado, validarCapaPedido } = usePedidos();

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
                    defaultValue={ pedidoSelecionado ? pedidoSelecionado.id : '' }
                    readOnly={pedidoSelecionado ? true : false}
                  />
                </AreaItem>
                <AreaItem>
                  <Input
                    name="capa"
                    label="Descrição Pedido:"
                    defaultValue={pedidoSelecionado ? pedidoSelecionado.capa : ''}
                  />
                </AreaItem>
                <AreaItem>
                  <Input
                    name="cliente"
                    label="Cliente:"
                    defaultValue={pedidoSelecionado ? pedidoSelecionado.cliente : ''}
                  />
                </AreaItem>
                <AreaItem style={{ width: "30%" }}>
                  <Input
                    name="data_criacao"
                    label="Data Emissão:"
                    defaultValue={pedidoSelecionado ? pedidoSelecionado.data_criacao : ''}
                  />
                </AreaItem>
                <AreaItem style={{ width: "30%" }}>
                  <Input
                    name="data_entrega"
                    label="Data entrega:"
                    defaultValue={pedidoSelecionado ? pedidoSelecionado.data_entrega : ''}
                  />
                </AreaItem>
                <AreaItem style={{ width: "30%" }}>
                  <Input
                    name="status"
                    label="Status:"
                    defaultValue={pedidoSelecionado ? pedidoSelecionado.status : ''}
                  />
                </AreaItem>
              </ContainerPrimeiraLinha>
              <ContainerSegundaLinha>
                <AreaItem>
                  <Input
                    name="endereco_entrega"
                    label="Endereço:"
                    defaultValue={pedidoSelecionado ? pedidoSelecionado.endereco_entrega : ''}
                  />
                </AreaItem>
                {/* <AreaItem style={{ width: "50%" }}>
                  <TesteDeSelect 
                    name="forma_pagamento"
                    label="Pagamento"
                    defaultValue={pedidoSelecionado ? pedidoSelecionado.forma_pagamento : ''}
                  />
                </AreaItem> */}
                <AreaItem style={{ width: "50%" }}>
                  <Input
                    name="forma_pagamento"
                    label="Pagamento:"
                    defaultValue={pedidoSelecionado ? pedidoSelecionado.forma_pagamento : ''}
                  />
                </AreaItem>
                <AreaItem style={{ width: "90%" }}>
                  <Input
                    name="observacoes"
                    label="Observações:"
                    defaultValue={pedidoSelecionado ? pedidoSelecionado.observacoes : ''}
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
