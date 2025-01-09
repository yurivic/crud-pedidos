import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  nome_usuario: Yup.string().required("Campo Obrigatório"),
  senha_usuario: Yup.string().required("Campo Obrigatório"),
});

export default validationSchema;
