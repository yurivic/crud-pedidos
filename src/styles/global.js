import PerfectScrollbar from "react-perfect-scrollbar";
import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px 'Outfit', sans-serif;
    background-color: ${colors.primariaBranca};
    -webkit-font-smoothing: antialiased !important;
  }
`;

export const fonte = "Outfit, sans-serif";

export const Scroll = styled(PerfectScrollbar)`
  width: 100%;
  height: 100%;

  .ps__rail-y,
  .ps__rail-x {
    border-radius: 8px;
  }

  .ps__thumb-y,
  .ps__thumb-x {
    border-radius: 8px;
  }

  /* Estilo do scrollbar vertical */
  ::-webkit-scrollbar {
    width: 12px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.primariaOpaca};
    border-radius: 8px;
  }

  /* Estilo do scrollbar horizontal */
  .ps__rail-x {
    background: rgba(0, 0, 0, 0.1);
  }

  .ps__thumb-x {
    background-color: ${colors.primariaOpaca};
    border-radius: 8px;
  }

  @media (max-width: 599px) {
    overflow: auto;
    scrollbar-width: thin;
    scrollbar-color: ${colors.primariaOpaca} rgba(0, 0, 0, 0.1);
    -ms-overflow-style: none;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  ::-webkit-scrollbar-thumb {
    background: rgba(98, 9, 139, 0.5);
    border-radius: 8px;
    right: 2px;
    position: absolute;
  }

  ::-webkit-scrollbar {
    background: transparent;
    width: 8px !important;
  }

  .MuiInputBase-root {
    font-size: 14px;
    color: #544a57;
    font-weight: bold;
  }

  /* .MuiTypography-root {
    padding: 1px;
  } */

  .MuiPaper-elevation4,
  .MuiTabs-flexContainer {
    box-shadow: none;
    background: #fff;
    border-bottom: solid 1px ${colors.primaria};
  }

  .MuiTabs-indicator {
    background-color: ${colors.primaria};
  }

  .MuiTab-textColorPrimary {
    color: ${colors.primaria};
  }

  .MuiTab-textColorPrimary.Mui-selected {
    color: ${colors.primaria};
  }
  .MuiCheckbox-colorPrimary.Mui-checked {
    color: ${colors.primaria};
  }

  select {
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    background: #f6f8ff;
    border: solid 1px #d8dbea;
    border-radius: 4px;
    height: 32px;
    padding-left: 5px;
    padding-right: 7px;
    color: #544a57;

    transition: background 0.3s;
    width: 100%;

    &:focus {
      border: solid 1px #ccc;
      box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.2);
      background: #fcffd3;
    }
  }

  option {
    color: #544a57;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 150;
    background-color: #f6f8ff;
    border: solid 1px #d8dbea;
  }
`;

export const BoxItems = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "fDirection",
      "flex",
      "wd",
      "flwrap",
      "jContent",
      "algItems",
      "jItems",
      "pdtop",
      "pdbottom",
      "pdleft",
      "pdright",
      "pd",
      "maxWd",
      "mg",
      "gap",
      "useBoxShadow",
    ].includes(prop),
})`
  display: flex;
  flex-direction: ${(props) => (props.fDirection ? "column" : "row")};
  width: ${(props) => (props.wd ? props.wd : "100")}%;
  flex: ${(props) => props.flex ?? "unset"};
  flex-wrap: ${(props) => (props.flwrap ? "wrap" : "unset")};
  justify-content: ${(props) =>
    props.jContent ? props.jContent : "space-between"};
  align-items: ${(props) => (props.algItems ? props.algItems : "flex-start")};
  justify-items: ${(props) => (props.jItems ? props.jItems : "flex-start")};
  margin: 0px;
  padding-top: ${(props) => props.pdtop}px;
  padding-bottom: ${(props) => props.pdbottom}px;
  padding-left: ${(props) => (props.pdleft ? props.pdleft : 0)}px;
  padding-right: ${(props) => (props.pdright ? props.pdright : 0)}px;
  padding: ${(props) => props.pd};
  max-width: ${(props) => props.maxWd};
  margin: ${(props) => props.mg ?? "0"};
  gap: ${(props) => props.gap ?? "10px"};
  box-shadow: ${(props) =>
    props.useBoxShadow ? "0px 0px 10px 0px rgba(0, 0, 0, 0.1)" : "none"};

  @media (min-width: 1024px) {
    width: ${(props) => props.wd}%;
  }

  @media (min-width: 1440px) {
    width: ${(props) => props.wd}%;
  }
`;

export const AreaItem = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "noflxGrow",
      "fDirection",
      "jContent",
      "algSelf",
      "algItems",
      "ptop",
      "pright",
      "pbottom",
      "pleft",
      "mg",
      "pd",
      "wd",
      "minWd",
      "gap",
      "hg",
      "useBoxShadow",
      "wdr",
    ].includes(prop),
})`
  display: flex;
  flex-grow: ${(props) => (props.noflxGrow ? 0 : 1)};
  flex-direction: ${(props) =>
    props.fDirection ? props.fDirection : "column"};
  justify-content: ${(props) => props.jContent ?? "flex-start"};
  justify-items: left;
  align-self: ${(props) => (props.algSelf ? props.algSelf : "flex-start")};
  align-items: ${(props) => (props.algItems ? props.algItems : "unset")};
  padding-top: ${(props) => props.ptop};
  padding-right: ${(props) => props.pright};
  padding-bottom: ${(props) => props.pbottom};
  padding-left: ${(props) => props.pleft};
  margin: ${(props) => (props.mg ? props.mg : 0)};
  padding: ${(props) => props.pd && props.pd};
  width: ${(props) => props.wd}%;
  font-size: 14px;
  font-weight: 400;
  min-height: 35px;
  color: #500569;
  font-size: 12px;
  color: #232c4f;
  min-width: ${(props) => (props.minWd ? props.minWd : "auto")};
  gap: ${(props) => props.gap ?? 0};
  height: ${({ hg }) => hg ?? "unset"};
  box-shadow: ${(props) =>
    props.useBoxShadow ? "0px 0px 10px 0px rgba(0, 0, 0, 0.1)" : "none"};

  @media (max-width: 599px) {
    width: ${(props) => (props.wdr ? `${props.wdr}%` : "100%")};
  }

  @media (min-width: 600px) {
    width: ${(props) => (props.wdr ? `${props.wdr}%` : "100%")};
  }

  @media (min-width: 1024px) {
    width: ${(props) => props.wd}%;
  }

  @media (min-width: 1440px) {
    width: ${(props) => props.wd}%;
  }
`;

export const ToolbarContainer = styled.div`
  display: flex;
  padding-inline: 10px;
  background-color: ${colors.primaria};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  width: -webkit-fill-available;
  height: 40px;
  justify-content: space-between;
`;

export const ToolbarTitle = styled.h2`
  font-size: 24px;
  color: ${colors.branco};
  height: 40px;
  margin: 0;
  margin-left: 5px;
  display: flex;
  align-items: center;

  @media (max-width: 696px) {
    font-size: 24px;
  }

  @media (max-width: 646px) {
    font-size: 20px;
  }

  @media (max-width: 580px) {
    font-size: 16px;
  }
`;

export const ContainerConteudo = styled.div`
  padding: 15px;
  overflow-y: auto;
  height: 100%;
`;

export const ContainerFiltros = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid ${colors.cinzaMaisClaro};
  width: 100%;

  @media (max-width: 599px) {
    flex-direction: column;
  }
`;

export const GridContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "height",
})`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "calc(100% - 210px)")};
  margin-top: 15px;
`;

export const ContainerBotoesGrid = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  height: 100%;
`;

// === MOBILE === //
export const ContainerCardsMobile = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["mtop", "gap", "pd", "noFlwrap", "ovrFlowX"].includes(prop),
})`
  display: flex;
  margin-top: ${(props) => (props.mtop ? props.mtop : 15)}px;
  gap: ${(props) => (props.gap ? props.gap : 15)}px;
  padding: ${(props) => (props.pd ? props.pd : "0px")};
  flex-wrap: ${(props) => (props.noFlwrap ? "unset" : "wrap")};
  overflow-x: ${(props) => (props.ovrFlowX ? "auto" : "initial")};
`;

export const ContainerCardMobile = styled.div.withConfig({
  shouldForwardProp: (prop) => !["wd"].includes(prop),
})`
  display: flex;
  flex-direction: column;
  min-width: ${(props) => (props.wd ? props.wd : "100%")};
  padding: 15px;
  gap: 15px;
  border-radius: 6px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const ContainerInfoMobile = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["flwrap", "fDirection", "jContent"].includes(prop),
})`
  display: flex;
  flex-wrap: ${(props) => (props.flwrap ? "wrap" : "unset")};
  flex-direction: ${(props) => (props.fDirection ? "column" : "row")};
  justify-content: ${(props) => props.jContent && "flex-start"};
  gap: 15px;
`;

export const TextoPadraoMobile = styled.div`
  font-size: 14px;
  color: ${colors.preto};
  font-weight: 400;
  margin: 0;
`;

export const InputEditavelMobile = styled.input`
  width: 40px;
  height: 20px;
  margin-left: 5px;
  padding: 5px;
  background-color: #f7f7f7;
  border: none;
  border-radius: 6px;
`;
// === MOBILE === //
