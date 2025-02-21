import styled from "styled-components";
import { colors } from "../../../../styles/colors";

export const ContainerCellRenderer = styled.div`
  display: flex;
  justify-content: center;
  aling-items: center;
  margin: auto;
`

export const Wrapper = styled.div`
  background-color: ${colors.branco};     
  border-radius: 12px;           
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);  
  padding: 15px;                  
  margin-top: 1px;               
`;