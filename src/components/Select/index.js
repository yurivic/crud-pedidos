import { useField } from "@unform/core";
import React, { useEffect, useRef } from "react";
import { colors } from "../../styles/colors";
import { FormSelect, SelectContainer } from "./styles";

const Select = ({
  name,
  label,
  isRequired,
  children,
  onChangeExternal,
  ...rest
}) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue = "", registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: "value", // O valor do select está na propriedade "value"
    });
  }, [fieldName, registerField]);

  return (
    <SelectContainer isRequired={Boolean(isRequired)}>
      <div>
        <label htmlFor={fieldName}>{label}</label>
      </div>
      <FormSelect
        ref={selectRef}
        name={fieldName}
        id={fieldName}
        defaultValue={defaultValue}
        invalid={error}
        onChange={onChangeExternal && rest.onChange}
        {...rest}
      >
        {children}
      </FormSelect>
      {error && (
        <div>
          <span style={{ color: colors.vermelhoErro, display: "block" }}>
            {error}
          </span>
        </div>
      )}
    </SelectContainer>
  );
};

export default Select;