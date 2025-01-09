import dayjs from "dayjs";
import { toast } from "react-toastify";
import * as Yup from "yup";

export const formatarMoeda = (valor, mostrarPrefixo = true) => {
  const partes = valor.toFixed(2).split(".");
  const numero = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return mostrarPrefixo
    ? `R$ ${numero},${partes[1]}`
    : `${numero},${partes[1]}`;
};

export const desformatarMoeda = (valorFormatado) => {
  const valorNumerico = parseFloat(
    valorFormatado.replace("R$ ", "").replace(",", ".")
  );
  return valorNumerico;
};

export const formatarData = (texto) => {
  const data = dayjs(texto).add(3, "hour");
  const dataFormatada = data.format("DD/MM/YYYY");
  return dataFormatada;
};

export const formatarDataComHora = (texto) => {
  const data = dayjs(texto).subtract(3, "hour");
  const dataFormatada = data.format("DD/MM/YYYY");
  return dataFormatada;
};

export const formatarDataParaEnvio = (data) => {
  if (!data) return null;

  const dataFormatada = dayjs(data, ["DD/MM/YYYY", "YYYY-MM-DD"]).format(
    "YYYY-MM-DD"
  );

  return dataFormatada !== "Invalid Date" ? dataFormatada : null;
};

export const formatarCPFParaEnvio = (texto) => {
  return texto.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

export const formatarTelefoneParaEnvio = (texto) => {
  return texto.replace(/(\d{2}) (\d{5})(\d{4})/, "($1) $2-$3");
};

export const formatarCEPParaEnvio = (texto) => {
  return texto.replace(/(\d{5})(\d{3})/, "$1-$2");
};

export const formatarCNPJParaEnvio = (texto) => {
  return texto.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2$.3/$4-$5");
};

export const removerFormatacaoData = (texto) => {
  return texto.replace(/[/]/g, "");
};

export const removerFormatacaoTelefone = (texto) => {
  return texto.replace(/[-()]/g, "");
};

export const removerFormatacaoCEP = (texto) => {
  return texto.replace(/[-]/g, "");
};

export const removerFormatacaoCNPJ = (texto) => {
  return texto.replace(/[.-/]/g, "");
};

export const removerFormatacaoCPF = (texto) => {
  return texto.replace(/[.-]/g, "");
};

export const makeValidation = async (schema, data, formRef, callback) => {
  formRef.current && formRef.current.setErrors({});

  try {
    await schema.validate(data, {
      abortEarly: false,
    });
    return true;
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        if (!error.path || !error.message) {
          return;
        }

        if (!validationErrors[error.path]) {
          validationErrors[error.path] = error.message;
        }
      });
      formRef.current && formRef.current.setErrors(validationErrors);
      callback && callback(validationErrors);
    }
    return false;
  }
};

export const errorAlertMessage = (error) => {
  try {
    const msg =
      (error?.response?.data?.error ?? null) ||
      (error?.response?.data?.erro ?? null) ||
      (Array.isArray(error?.response?.data?.errors) &&
        error?.response?.data?.errors[0]?.message) ||
      (error?.response?.data?.mensagem ?? null) ||
      (error?.response?.data?.message ?? null) ||
      (error?.message ?? null) ||
      (error?.error ?? null) ||
      (error?.erro ?? null) ||
      "Ocorreu um erro inesperado. Tente novamente mais tarde.";

    toast.error(`Erro: ${msg}`);
    return msg;
  } catch (e) {
    const fallbackMsg = "Erro desconhecido. Tente novamente mais tarde.";
    toast.error(fallbackMsg);
    return fallbackMsg;
  }
};

export const limparCampos = (form) => {
  if (form.current) {
    form.current.reset();
    form.current.setErrors({});
  }
};
