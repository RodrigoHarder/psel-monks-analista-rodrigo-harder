# Case challenge

## Visão geral do projeto

Projeto desenvolvido como parte do processo seletivo da Monks para a vaga de Analista.  A aplicação apresenta um *mockup* que pode ser utilizado para criar *landing pages* com diferentes temáticas.

O protótipo das telas está disponível no [Figma](https://www.figma.com/design/D6mY5cesOzFnNdwhR6xST8/Psel-Desenvolvimento-2025--Copy-?node-id=8-75&t=RbZqPbUPPgmrNCbh-0).

## Demonstração

![Gif apresentando o mockup](./assets/gif-mockup.gif)

## Aplicação do mockup

Para aplicar o projeto, basta fazer alterações no documento `db.json`, alterar as imagens que serão utilizadas na pasta `pulic` e modificar as cores no arquivo `_variables.scss` dentro da pasta `src/styles`.

Um exemplo pode ser um página sobre um pet shop, que pode ser acessado [neste repositório](https://github.com/RodrigoHarder/psel-monks-analista-rodrigo-harder/tree/example_petshop). A demonstração segue abaixo:

![Gif apresentando um exemplo de aplicação para um pet shop](./assets/gif-petshop.gif)

## Instruções para execução

### **Pré-requisitos**
1. Certifique-se de ter o **Node.js**. As versões usadas neste projeto foram: Node (22.14.0) e npm (11.3.0).
   - É recomendado usar o `nvm` para gerenciar as versões do Node.js.
   - Antes de prosseguir, execute `nvm use` (e, caso necessário, `nvm install` e novamente `nvm use`).

2. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicialize o ambiente de desenvolvimento com o comando `npm run dev`

## Tecnologias aplicadas

- **[React.js](https://react.dev/):** biblioteca usada para a estrutura do projeto.
- **[SCSS](https://sass-lang.com/)**: usado para criação de variáveis e aplicação dos estilos através dos componentes.
- **Tema do Wordpress:** utilizei um tema do Wordpress como backend para armazenar as imagens e textos. Caso queira você pode acessar [neste repositório](https://github.com/RodrigoHarder/backend-psel-monks-analista-rodrigo-harder.git).

## Conceitos e metodologias aplicadas

- **Services:** criação de serviços para acessar a API através do `fetch` e métodos HTTP.
- **[Hooks Personalizados](https://marcosviniciosneves.medium.com/react-dominando-custom-hooks-e-otimizando-a-reutiliza%C3%A7%C3%A3o-de-l%C3%B3gica-d592ce422fc1):** desenvolvimento de *hooks* personalizados para separar as responsabilidades e cuidar apenas dos dados. Além disso, caso seja necessário tornar esses dados reutilizáveis em diferentes partes da aplicação. 
- **[Colocation](https://kentcdodds.com/blog/colocation)**: Organização de diretórios para facilitar a navegação e manutenção do código.

## Outras ferramentas úteis

- **[React Icons](https://react-icons.github.io/react-icons/):** Utilizados para adicionar elementos gráficos consistentes e visuais ao projeto.
- **[React Hook Forms](https://react-hook-form.com/):** para lidar com os dados do formulário.

---

Este documento foi criado para fornecer orientações claras sobre o *case challenge* e sua execução.
