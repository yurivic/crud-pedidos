import { AppBar, Tab, Tabs } from "@mui/material";
import React, { useEffect } from "react";
import { FaClipboard, FaCubes, FaSearch } from "react-icons/fa";
import TabPanel from "../../components/TabPanel";
import { usePedidos } from "../../hooks/usePedidos";
import { colors } from "../../styles/colors";
import { Container, Scroll } from "../../styles/global";
import CadastroDoPedido from "./Abas/CadastroDoPedido";
import ItensDoPedido from "./Abas/ItensDoPedido";
import ListagemDePedidos from "./Abas/ListagemDePedidos";
import DeslogarSistema from "../../components/LogOff/DeslogarSis";
import BotaoAdd from "../../components/Button/BotaoNewPed";
import { limparCampos } from "../../utils/funcoes";


export default function Pedidos() {
  const { formFiltrosRef, abaAtiva, pedidoSelecionado, mudarAba } = usePedidos();

  return (
    <Container>
      <AppBar position="static" color="default">
        <Tabs
          value={abaAtiva}
          onChange={mudarAba}
          variant="scrollable"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab
            label="Listagem de pedidos"
            icon={<FaSearch size={24} color={colors.primaria} />}
          />
          <Tab
            label="Cadastro do pedido"
            icon={
              <FaClipboard
                size={24}
                color={abaAtiva === 0 ? colors.desativado : colors.primaria}
              />
            }
            disabled={abaAtiva === 0}
          />
          <Tab
            label="Itens do pedido"
            icon={
              <FaCubes
                size={24}
                color={!pedidoSelecionado ? colors.desativado : colors.primaria}
              />
            }
            disabled={!pedidoSelecionado}
          /> 
        </Tabs>
      </AppBar>
      <>
        <DeslogarSistema></DeslogarSistema>
      </>
      <Scroll>
        <TabPanel value={abaAtiva} index={0}>
          <BotaoAdd />
          <ListagemDePedidos />
        </TabPanel>
        <TabPanel value={abaAtiva} index={1}>
          <CadastroDoPedido />
        </TabPanel>
        <TabPanel value={abaAtiva} index={2}>
          <ItensDoPedido />
        </TabPanel>
      </Scroll>
    </Container>
  );
}
