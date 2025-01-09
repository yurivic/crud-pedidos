import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/colors";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${colors.primariaBranca};
`;

export const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 8px solid #ccc;
  border-top: 8px solid ${colors.primaria};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
