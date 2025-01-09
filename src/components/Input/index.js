import { useField } from "@unform/core";
import React, { useEffect, useRef } from "react";
import { colors } from "../../styles/colors";
import { FormInput, InputContainer } from "./styles";

const Input = ({
  name,
  label,
  isUppercase = true,
  isRequired,
  onChangeExternal,
  maxLength,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = "", registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  const toInputUppercase = (e) => {
    if (isUppercase) {
      e.target.value = `${e.target.value}`.toUpperCase();
    }
  };

  return (
    <InputContainer isRequired={Boolean(isRequired)}>
      <div>
        <label htmlFor={fieldName}>{label}</label>
      </div>
      <FormInput
        ref={inputRef}
        name={fieldName}
        id={fieldName}
        defaultValue={defaultValue}
        onBlur={toInputUppercase}
        uppercase={Boolean(isUppercase)}
        invalid={error}
        maxLength={maxLength}
        onChange={onChangeExternal && rest.onChange}
        {...rest}
      />
      {error && (
        <div>
          <span style={{ color: colors.vermelhoErro, display: "block" }}>
            {error}
          </span>
        </div>
      )}
    </InputContainer>
  );
};

export default Input;
