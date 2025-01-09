export const mockPedidos = [
  {
    id: 1,
    capa: "Pedido 001 - Capa de Pedido",
    cliente: "Cliente 1",
    data_criacao: "2025-01-10",
    data_entrega: "2025-01-15",
    status: "Em andamento",
    endereco_entrega: "Rua Exemplo, 123, Cidade X",
    forma_pagamento: "Cartão de Crédito",
    observacoes: "Urgente, por favor",
    itens: [
      { id: 1, produto: "Produto A", quantidade: 2, preco: 100, total: 200 },
      { id: 2, produto: "Produto B", quantidade: 1, preco: 50, total: 50 },
    ],
  },
  {
    id: 2,
    capa: "Pedido 002 - Capa de Pedido",
    cliente: "Cliente 2",
    data_criacao: "2025-01-09",
    data_entrega: "2025-01-12",
    status: "Concluído",
    endereco_entrega: "Avenida Exemplo, 456, Cidade Y",
    forma_pagamento: "Boleto",
    observacoes: "Preferência por entrega à noite",
    itens: [
      { id: 3, produto: "Produto C", quantidade: 3, preco: 30, total: 90 },
      { id: 4, produto: "Produto D", quantidade: 1, preco: 70, total: 70 },
    ],
  },
];
