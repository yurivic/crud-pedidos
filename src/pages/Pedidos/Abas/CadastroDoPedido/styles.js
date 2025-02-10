import styled from "styled-components";
import { colors } from "../../../../styles/colors";

export const PrimeiraLinha = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%
  font-family: inherit;
`

export const StyleLabelAndInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px; 
  padding: 20px;
  margin-bottom: 15px;
`;

// Forma alternativa que encontrei de mudar o tamanho da div sem alterar o tamanho da div padrão dos elementos
export const CapaPedido = styled(StyleLabelAndInput)`
  width: 300px;
`;

export const EnderecoPedido = styled(StyleLabelAndInput)`
  width: 400px;
`;

export const SegundaLinha = styled(PrimeiraLinha)`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: inherit;
`
export const FormaPag = styled(StyleLabelAndInput)`
  width: 300px;
`

// <---->

export const StyleLabel = styled.div`
  color: ${colors.preto};
  font-size: 16px; 
  margin-bottom: 5px; 
`;

export const StyleInput = styled.div`
  width: 100%; 
`;

export const LabelPedido = styled.label`
  font-weight: 500;
  font-size: 16px;
  padding: 0px 2px;
`;

export const InputPedido = styled.input`
  width: 100%; 
  height: 35px; 
  border-radius: 5px;
  border: 2px solid ${colors.cinzaClaro};
  font-size: 16px;
  padding: 0 10px; 
  
  &::placeholder {
    color: ${colors.preto2}; 
    font-size: 16px;
    font-style: italic;
  }

  &:focus {
    border-color: ${colors.azul}; 
    outline: none;
    box-shadow: 0 0 3px ${colors.azul}; 
  }

  #capaPedido {
    width: 500px;
  }
`;

export const SelectFormaPagamento = styled.select`
  width: 100%; 
  height: 35px;
  border-radius: 5px;
  border: 2px solid ${colors.cinzaClaro};
  font-size: 16px;
  padding: 0 10px;
  background-color: white;
  color: ${colors.preto};

  
  &:focus {
    border: none;
    background-color: ${colors.primariaBranca} 
    outline: 2px solid ${colors.primariaBranca}; 
    box-shadow: none;
  }

  option {
    font-size: 16px;
    padding: 10px;
    background-color: white;
    color: ${colors.preto};

    &:checked {
      background-color: ${colors.cinzaClaro};
    }
  }

  option:firt-child {
    color: ${colors.preto}
  }

  &::-ms-expand {
    display: none; 
  }
`;




