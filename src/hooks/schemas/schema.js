import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
    nome_usuario: Yup.string().required("Campo Obrigatório"),
    senha_usuario: Yup.string().required("Campo Obrigatório"),
});

export const validationSchemaPed = Yup.object().shape({
    capa: Yup.string().required("Capa do Pedido é obrigatório"),
    cliente: Yup.string().required("Cliente é obrigatório"),
    endereco_entrega: Yup.string().required("Endereço é obrigatório"),
    forma_pagamento: Yup.string().required('Forma de pagamento obrigatória'),
    observacoes: Yup.string().notRequired(),
})

export const validationSchemaItens = Yup.object().shape({
    produto: Yup.string().required("Produto é obrigatório"),
    quantidade: Yup.number().required("Quantidade é obrigatória").positive("A quantidade deve ser maior que zero"),
    preco: Yup.number().required("Preço é obrigatório").positive("O preço deve ser maior que zero"),
    total: Yup.number().required("Total é obrigatório").positive("O total deve ser maior que zero"),
})



