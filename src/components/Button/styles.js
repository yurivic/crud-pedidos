import styled from "styled-components";
import { colors } from "../../styles/colors";

export const BotaoSavePed = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  margin: 2px 7px;
  font-size: 25px;
  cursor: pointer;
  background-color: ${colors.primaria}
`

export const BotaoDelete = styled.button`
    display: block;
    background-color: ${colors.vermelho};
    color: #000000;
    width: 100px;
    height: 45px;
    line-height: 45px;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: pointer;
    overflow: hidden;
    border-radius: 7px;
    box-shadow: 0 0 20px 0 rgba(0,0,0,.3);
    transition: all 0.4s;
    border: none;

    span,
    .icon {
    display: block;
    height: 100%;
    text-align: center;
    position: absolute;
    top: 0;
    }

    span {
    width: 72%;
    line-height: inherit;
    font-size: 14px;
    text-transform: uppercase;
    left: 0;
    transition: 0.3s;

    &:after {
      content: '';
      background-color: #000000;
      width: 2px;
      height: 70%;
      position: absolute;
      top: 15%;
      right: 5px;
    }
  }

  .icon {
    width: 28%;
    right: 0;
    transition: all 0.3s;

    .fa {
      font-size: 30px;
      vertical-align: middle;
      transition: all  0.3s
    }

    .fa-trash {
      height: 20px;
      margin-top: 12px;
      background-color: ${colors.vermelho}
    }
  }

  &:hover {
    span {
      left: -72%;
      opacity: 0;
    }

    .icon {
      width: 100%;

      .fa {
        font-size: 45px;
      }
    }
  }

  &:hover {
    opacity: .9;
  }

  &:active {
    opacity: 1;
  };
`;

export const EditPedido = styled.button`
    display: block;
    background-color: #00A9FF;
    color: #000000;
    width: 100px;
    height: 45px;
    line-height: 45px;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: pointer;
    overflow: hidden;
    border-radius: 7px;
    box-shadow: 0 0 20px 0 rgba(0,0,0,.3);
    transition: all 0.4s;
    border: none;

    span,
    .icon {
    display: block;
    height: 100%;
    text-align: center;
    position: absolute;
    top: 0;
    }

    span {
    width: 72%;
    line-height: inherit;
    font-size: 14px;
    text-transform: uppercase;
    left: 0;
    transition: 0.3s;

    &:after {
      content: '';
      background-color: #000000;
      width: 2px;
      height: 70%;
      position: absolute;
      top: 15%;
      right: 5px;
    }
  }

  .icon {
    width: 28%;
    right: 0;
    transition: all 0.3s;

    .fa {
      font-size: 30px;
      vertical-align: middle;
      transition: all  0.3s
    }

    .fa-pen-to-square {
      height: 22px;
      margin-top: 10px;
    }

    .fa-trash {
      height: 22px;
      margin-top: 10px;
      background-color: ${colors.vermelho}
    }
  }

  &:hover {
    span {
      left: -72%;
      opacity: 0;
    }

    .icon {
      width: 100%;

      .fa {
        font-size: 45px;
      }
    }
  }

  &:hover {
    opacity: .9;
  }

  &:active {
    opacity: 1;
  };
`;

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
