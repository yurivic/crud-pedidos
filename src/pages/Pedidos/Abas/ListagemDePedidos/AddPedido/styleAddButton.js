import styled from "styled-components";
import {colors} from "../../../../../styles/colors"

export const DivBotao = styled.div`
    background-color: ${colors.roxo};
    height: 50px;
`;

export const AddButton = styled.button`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 2px solid ${colors.primariaBranca};
    margin: 10px 17px;
    background-color: ${colors.roxo};
    color: white;
    cursor: pointer;
    transition: background 0.3s ease;
    &:hover {
      background-color: ${colors.primariaClara};
    }
`;