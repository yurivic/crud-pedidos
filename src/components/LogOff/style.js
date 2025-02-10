import styled from "styled-components";
import { colors } from "../../styles/colors";

export const BotaoDeslogar = styled.button`

  position: fixed;
  top: 10px; 
  right: 20px; 
  background-color: #ffffff;
  color: black; 
  border: none; 
  border-radius: 50%; 
  padding: 15px; 
  cursor: pointer; 
  font-size: 24px; 
  display: flex;
  align-items: center; 
  justify-content: center; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  transition: background-color 0.3s ease; 
  
  &:hover {
    background-color: ${colors.azul};
  }
`;
