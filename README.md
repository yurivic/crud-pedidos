# CRUD-Pedidos: Documentação de Desenvolvimento

## Visão Geral

O projeto `crud-pedidos` é uma aplicação de gerenciamento de pedidos que simula um ERP para treinamento de novos desenvolvedores. Este projeto tem como objetivo permitir o cadastro, listagem, edição e exclusão de pedidos, com funcionalidades que envolvem uma estrutura de capas (informações gerais) e itens (detalhes do pedido).

Esta documentação visa fornecer uma visão geral sobre a estrutura e os principais componentes do projeto, com foco em ajudar novos desenvolvedores a entender e contribuir com o código de forma eficiente.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface de usuário.
- **React Router**: Gerenciamento de rotas da aplicação.
- **Context API e Hooks**: Utilizados para gerenciamento de estado global.
- **Axios**: Para realizar requisições HTTP à API.
- **Material UI**: Biblioteca de componentes de UI (Interface do Usuário).
- **Yup**: Biblioteca para validação de formulários.
- **React Query (ou outras bibliotecas de requisição, se necessário)**: Para gerenciamento de dados assíncronos.

## Estrutura do Projeto

### Pastas e Arquivos Principais

- **/src**
  - **/components**: Contém os componentes reutilizáveis da aplicação, como formulários, tabelas e modais.
  - **/hooks**: Contém hooks personalizados, como `usePedidos` para gerenciar o estado global dos pedidos.
  - **/mocks**: Contém os dados fictícios dos pedidos.
  - **/pages**: Contém as páginas da aplicação, como a página de pedidos.
  - **/routes**: Contém o gerenciamento de rotas da aplicação.
  - **/services**: Contém funções para chamadas à API.
  - **/styles**: Arquivos de estilos globais e específicos.
  - **/utils**: Funções gerais que podem ser "úteis" em toda a aplicação.

## Fluxo Principal

### Listagem de Pedidos
- A página de pedidos realiza uma consulta simulada à API para obter os dados de pedidos.
- Os pedidos são exibidos em uma tabela, permitindo interações de edição, exclusão e visualização de detalhes.

### Cadastro de Pedidos
- O cadastro de pedidos é feito por meio de um formulário.
- O formulário permite que o usuário insira informações detalhadas sobre o pedido e seus itens.
- A validação do formulário é feita com Yup, garantindo que todos os campos obrigatórios sejam preenchidos corretamente.

### Edição de Pedidos
- A edição de um pedido é feita selecionando o pedido na lista e modificando os campos desejados.
- As mudanças são enviadas para a API via uma requisição PUT ou PATCH.

### Exclusão de Pedidos
- O usuário pode excluir um pedido, o que dispara uma requisição DELETE para a API.

## Componentes e Contexto

### PedidosProvider

Este componente envolve toda a aplicação com o contexto global para os pedidos. Ele utiliza o `useState` para armazenar o estado da aba ativa, pedido selecionado e outros dados relacionados. Além disso, ele oferece funções como `buscarPedidos` para realizar a consulta à API.

```javascript
export const PedidosProvider = ({ children }) => {
  const { setIsLoading } = useLoadingStore();
  const [abaAtiva, setAbaAtiva] = useState(0);
  const [pedidoSelecionado, setPedidoSelecionado] = useState(null);

  const buscarPedidos = async () => {
    try {
      setIsLoading(true);
      const response = await listarPedidos();
      console.log(response); // Aqui você processa os dados retornados pela API
    } catch (err) {
      errorAlertMessage(err);
    } finally {
      setIsLoading(false);
    }
  };

  const values = useMemo(() => ({
    abaAtiva,
    setAbaAtiva,
    pedidoSelecionado,
    setPedidoSelecionado,
    buscarPedidos,
  }), [abaAtiva, pedidoSelecionado]);

  return (
    <PedidosContext.Provider value={values}>
      {children}
    </PedidosContext.Provider>
  );
};
```

### Chamadas à API

As simulações de requisições para a API de pedidos são feitas dentro das funções assíncronas, utilizando apenas mocks. Abaixo, temos um exemplo de como a função listarPedidos pode ser estruturada:
```javascript
import { mockPedidos } from "../../mocks/Pedidos";

export const listarPedidos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockPedidos);
    }, 1000);
  });
};
```

### Padrões de Codificação
- Componentes Funcionais: Utilize componentes funcionais com hooks.
- Organização de Componentes: Componentes devem ser pequenos, reutilizáveis e bem organizados.
- Nomes de Variáveis e Funções: Nomes devem ser claros e expressivos.
- Estilos: Utilize styled-components para estilização. Evite estilizar diretamente no componente.

## Como Contribuir

1. **Fork o Repositório**: Crie um fork do projeto.

2. **Crie uma Branch**: Para cada nova funcionalidade ou correção, crie uma nova branch.

3. **Realize as Alterações**: Faça as alterações necessárias no código.

4. **Testes**: Execute os testes e verifique se a aplicação funciona como esperado.

5. **Commit**: Faça commits pequenos e descritivos.

6. **Pull Request**: Submeta um Pull Request (PR) para revisão.


### Como Rodar o Projeto Localmente

1. **Clone o repositório**:

    ```bash
    git clone https://github.com/seu-usuario/crud-pedidos.git
    ```

2. **Instale as dependências**:

    ```bash
    npm install
    ```

3. **Inicie o projeto**:

    ```bash
    npm start
    ```

O projeto estará disponível em [http://localhost:3000](http://localhost:3000).
