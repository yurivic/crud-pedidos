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

export const editarItem = (pedidoId, idItem, novosDados) => {
  console.log(idItem);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pedidoIndex = mockPedidos.find((pedido) => pedido.id === pedidoId);
      console.log("pedidoIndex:", pedidoIndex);

      if (!pedidoIndex) {
        reject(`Pedido com ID ${pedidoId} não encontrado.`);
        return;
      }

      const itemIndex = pedidoIndex.itens.findIndex(
        (item) => item.id === idItem
      );
      console.log(itemIndex);

      if (itemIndex !== -1) {
        pedidoIndex.itens[itemIndex] = {
          ...pedidoIndex.itens[itemIndex],
          ...novosDados,
        };
        console.log(novosDados);

        const itemAtualizado = pedidoIndex.itens[itemIndex];
        itemAtualizado.total = itemAtualizado.quantidade * itemAtualizado.preco;

        resolve(itemAtualizado);
      } else {
        reject(`Item com ID ${idItem} não encontrado no pedido ${pedidoId}.`);
      }
    }, 1000);
  });
};

export const excluirItem = (pedidoId, itemId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pedido = mockPedidos.find((p) => p.id === pedidoId);

      if (!pedido) {
        reject(`Pedido com ID ${pedidoId} não encontrado.`);
        return;
      }

      const itemIndex = pedido.itens.findIndex((item) => item.id === itemId);

      if (itemIndex === -1) {
        reject(`Item com ID ${itemId} não encontrado no pedido ${pedidoId}.`);
        return;
      }

      const itemRemovido = pedido.itens.splice(itemIndex, 1);
      resolve(itemRemovido[1]);
    }, 1500);
  });
};
