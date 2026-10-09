# Helena Burger

Site institucional da Helena Burger, com apresentação da marca, horários de atendimento, localização e atalhos de contato. A página inicial inclui uma animação do hambúrguer controlada pela rolagem.

## Tecnologias

- React 19
- TanStack Start e TanStack Router
- TypeScript
- Vite
- Tailwind CSS
- Componentes Radix UI

## Requisitos

- Node.js 20 ou superior
- npm 10 ou superior

## Como executar

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação.

## Scripts

| Comando             | Descrição                                 |
| ------------------- | ----------------------------------------- |
| `npm run dev`       | Inicia o servidor de desenvolvimento      |
| `npm run build`     | Gera a versão de produção                 |
| `npm run build:dev` | Gera uma build em modo de desenvolvimento |
| `npm run preview`   | Executa localmente a build gerada         |
| `npm run lint`      | Verifica o código com ESLint              |
| `npm run format`    | Formata os arquivos com Prettier          |

## Estrutura principal

```text
public/
  frames/        Quadros usados na animação por rolagem
  lp/            Página, estilos e scripts da landing page
src/
  components/    Componentes reutilizáveis de interface
  hooks/         Hooks React
  lib/           Utilitários e tratamento de erros
  routes/        Rotas do TanStack Router
```

A rota `/` encaminha o visitante para a landing page em `public/lp/index.html`.

## Produção

Gere os arquivos de produção com:

```bash
npm run build
```

Antes da publicação, substitua os links provisórios (`href="#"`) em `public/lp/index.html` pelos endereços reais do WhatsApp, pedidos, cardápio e redes sociais.
