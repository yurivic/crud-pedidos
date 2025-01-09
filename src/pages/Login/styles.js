import styled from "styled-components";
import { colors } from "../../styles/colors";

//Tela Normal
export const ContainerTelaInicial = styled.div`
  display: flex;
  width: 100%;
  height: 100dvh;
`;

export const ContainerLadoEsquerdo = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  background-color: ${colors.primaria};
  justify-content: center;
  align-items: center;
  padding-inline: 20px;
`;

export const ContainerTitulo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: fit-content;
  margin-bottom: 80px;
`;

export const Titulo = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: bold;
  color: ${colors.branco};
`;

export const Circunferencia1 = styled.div`
  display: flex;
  width: 450px;
  height: 450px;
  border: 1px solid ${colors.branco};
  border-radius: 100%;
  position: fixed;
  bottom: -220px;
  left: -150px;
`;

export const Circunferencia2 = styled.div`
  display: flex;
  width: 450px;
  height: 450px;
  border: 1px solid ${colors.branco};
  border-radius: 100%;
  position: fixed;
  bottom: -240px;
  left: -100px;
`;

export const ContainerLadoDireito = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: center;
  align-items: center;
  padding-inline: 20px;
  background-color: ${colors.primariaBranca};
`;

export const ContainerElementos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 70%;
`;

export const ContainerBoasVindas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TextoBoasVindas = styled.h2`
  margin: 0px;
  font-size: 20px;
`;

//Tela Mobile
export const ContainerTelaInicialMobile = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  margin-left: 0px;
  padding-inline: 20px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: linear-gradient(
    to bottom,
    ${colors.primaria} 50%,
    ${colors.primariaBranca} 50%
  );
`;

export const ContainerInfoSistema = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const LogoSistema = styled.img`
  display: flex;
  width: 200px;
`;

export const TituloMobile = styled.h1`
  font-size: 28px;
  color: ${colors.branco};
  text-align: center;
`;

export const ContainerElementosMobile = styled.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 90px;
  border-radius: 6px;
  box-shadow: 12px 12px 12px 12px rgba(0, 0, 0, 0.1);
  background-color: ${colors.branco};
`;

export const TextoBoasVindas1Mobile = styled.h2`
  text-align: center;
  font-size: 24px;
`;

export const ContainerCamposTextoMobile = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 10px;
`;

export const ContainerBotoesMobile = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
