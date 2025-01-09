import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/colors";

export const ContainerLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 30%;
  height: 30%;
  background-color: ${colors.branco};
  border-radius: 6px;

  @media (max-width: 600px) {
    width: 80%;
    height: 40%;
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 8px solid #ccc;
  border-top: 8px solid ${colors.primaria};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const EscritaLoading = styled.p`
  font-size: 22px;
  color: ${colors.primaria};
  margin: 0;
  padding-bottom: 20px;
  padding-inline: 20px;
  text-align: center;

  @media (max-width: 730px) {
    font-size: 20px;
  }

  @media (max-width: 440px) {
    font-size: 18px;
  }

  @media (max-width: 374px) {
    font-size: 14px;
  }
`;
