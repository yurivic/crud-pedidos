import { mockPedidos } from "../../mocks/Pedidos";

export const listarPedidos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockPedidos);
    }, 1000);
  });
};

export const cadastrarPedido = (novoPedido) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        novoPedido &&
        novoPedido.capa &&
        novoPedido.cliente &&
        novoPedido.data_criacao
      ) {
        const id = mockPedidos.length
          ? mockPedidos[mockPedidos.length - 1].id + 1
          : 1;
        const pedidoComId = { ...novoPedido, id, itens: [] };
        mockPedidos.push(pedidoComId);
        resolve(pedidoComId);
      } else {
        reject("Erro: Campos obrigatórios faltando.");
      }
    }, 1500);
  });
};

export const editarPedido = (id, dadosAtualizados) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pedidoIndex = mockPedidos.findIndex((pedido) => pedido.id === id);
      if (pedidoIndex !== -1) {
        mockPedidos[pedidoIndex] = {
          ...mockPedidos[pedidoIndex],
          ...dadosAtualizados,
        };
        resolve(mockPedidos[pedidoIndex]);
      } else {
        reject("Pedido não encontrado.");
      }
    }, 1000);
  });
};

export const excluirPedido = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pedidoIndex = mockPedidos.findIndex((pedido) => pedido.id === id);
      if (pedidoIndex !== -1) {
        const pedidoRemovido = mockPedidos.splice(pedidoIndex, 1);
        resolve(pedidoRemovido[1]);
      } else {
        reject("Pedido não encontrado.");
      }
    }, 1500);
  });
};
