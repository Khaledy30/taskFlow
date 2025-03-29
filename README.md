# TaskFlow

Uma API de gerenciamento de tarefas construída com Node.js, Express e Prisma.

## Sobre o Projeto

O TaskFlow é uma API REST que permite criar, listar e gerenciar tarefas de forma simples e eficiente.

A aplicação oferece endpoints para:

- Criação de novas tarefas
- Listagem de todas as tarefas
- Busca de tarefa por ID
- Marcação de tarefas como concluídas

## Tecnologias

- Node.js
- TypeScript
- Express
- Prisma ORM
- MySQL
- Jest

## Qualidade de Código

- ESLint para padronização e qualidade do código
- Prettier para formatação consistente
- Husky para garantir qualidade em cada commit através de hooks

## Motivação

Este projeto foi criado do zero com o objetivo de aplicar conceitos modernos de desenvolvimento, incluindo:

- Tipagem forte com TypeScript
- ORM moderno com Prisma
- Testes de integração
- Padronização de código
- Commits consistentes
- Automação de qualidade

## Instalação e Configuração

### Requisitos

- Node.js
- MySQL
- npm ou yarn

Instale as dependências:

```bash
npm install
```

### Banco de Dados

1. Certifique-se de ter o MySQL instalado localmente
2. Crie um banco de dados para o projeto:

```bash
mysql -u root -p
CREATE DATABASE taskflow;
```

### Prisma

1. Configure o arquivo .env com suas credenciais do MySQL:

```env
DATABASE_URL="mysql://root:sua_senha@localhost:3306/taskflow"
```

2. Gere o cliente Prisma:

```bash
npx prisma generate
```

3. Sincronize o banco de dados:

```bash
npx prisma db push
```

### Executando o Projeto

Para iniciar o servidor em modo de desenvolvimento:

```bash
npm run dev
```

O servidor estará disponível em http://localhost:3000

## Endpoints da API

- `POST /tasks`: Cria uma nova tarefa.
- `GET /tasks`: Lista todas as tarefas.
- `GET /tasks/:id`: Busca uma tarefa por ID.
- `PUT /tasks/:id`: Atualiza uma tarefa para o status de concluída por ID.

## Testando a API

### Usando Insomnia/Postman

Para testar os endpoints, você pode usar o Insomnia ou Postman. Aqui estão os endpoints configurados:

Criar Tarefa

- Método: `POST`
- URL: `http://localhost:3000/tasks`
- Body (JSON):

```json
{
  "taskDescription": "Enuma Elish"
}
```

Listar Tarefas

- Método: GET
- URL: http://localhost:3000/tasks - Busca todas as tarefas
- URL: http://localhost:3000/tasks/:id - Busca uma tarefa por ID

Completar Tarefa

- Método: PUT
- URL: http://localhost:3000/tasks/:id - Atualiza uma tarefa para o status de concluída

Exemplo de resposta:

```json
{
  "id": "97c338bb-b14b-4044-b89c-6cf6468b5174",
  "taskDescription": "Enuma Elish",
  "taskStatus": "PENDING",
  "createdAt": "2024-03-28T09:56:83Z",
  "completedAt": null
}
```

## Testes

Para executar os testes de integração:

```bash
npm test
```

Para executar os testes em modo watch (desenvolvimento):

```bash
npm test -- --watch
```

**Observação**: Os testes utilizam o mesmo banco de dados configurado no .env, mas criam e removem os dados de teste automaticamente.

## Estrutura do Projeto

```plaintext
src/
├── controllers/    # Controladores da aplicação
├── repositories/   # Camada de acesso ao banco
├── routes/         # Rotas da API
├── types/          # Tipos e interfaces
├── useCases/       # Regras de negócio
└── server.ts       # Entrada da aplicação
```
