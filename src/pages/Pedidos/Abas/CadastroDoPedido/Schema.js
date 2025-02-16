import * as Yup from 'yup'

const validationSchemaPed = Yup.object().shape({
    capa: Yup.string().required("Capa do Pedido é obrigatório"),
    cliente: Yup.string().required("Cliente é obrigatório"),
    endereco_entrega: Yup.string().required("Endereço é obrigatório"),
    forma_pagamento: Yup.string().required('Forma de pagamento obrigatória'),
    observacoes: Yup.string().notRequired(),
})

export default validationSchemaPed