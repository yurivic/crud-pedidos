import styled from "styled-components";

export const FormSelect = styled.select`
  width: 100%;
  padding: 5px;
  border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
  border-radius: 4px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

export const SelectContainer = styled.div`
  margin-bottom: 16px;
`;