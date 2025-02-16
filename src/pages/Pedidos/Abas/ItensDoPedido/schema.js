import * as Yup from 'yup'

const schemaItensPed = Yup.array().of(
    Yup.object().shape({
        produto: Yup.string().required("Produto é obrigatório"),
        quantidade: Yup.number().required("Quantidade é obrigatória").positive("A quantidade deve ser maior que zero"),
        preco: Yup.number().required("Preço é obrigatório").positive("O preço deve ser maior que zero"),
        total: Yup.number().required("Total é obrigatório").positive("O total deve ser maior que zero"),
    })
).min(1, "Obrigatório pelo menos 1 item no cadasto")

export default schemaItensPed