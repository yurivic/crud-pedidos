import styled from "styled-components";


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

