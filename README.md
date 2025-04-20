# Amazon Product Scraper

Este projeto foi desenvolvido como parte de um processo seletivo para uma vaga de Desenvolvedor Full Stack Junior. O objetivo foi criar um web scraper que demonstrasse habilidades tanto em frontend quanto em backend, utilizando tecnologias modernas.

## Sobre o Projeto

Um web scraper simples e eficiente para extrair informações de produtos da Amazon usando Bun, Express e JSDOM. O projeto demonstra conhecimentos em:

- Frontend: HTML5, CSS3 e JavaScript vanilla
- Backend: Node.js/Bun com Express
- Web Scraping: Técnicas de extração de dados com JSDOM
- Tratamento de erros e respostas da API
- Design responsivo e experiência do usuário

## Funcionalidades

- Busca produtos na Amazon por palavra-chave
- Extrai título, avaliação, número de reviews e URL da imagem
- Interface web amigável para visualização dos resultados
- Design responsivo e moderno
- Tratamento de erros e feedback ao usuário

## Tecnologias Utilizadas

- **Runtime**: Bun
- **Backend**: Express.js
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Bundler**: Vite
- **Parsing HTML**: JSDOM
- **Requisições HTTP**: Axios

## Requisitos

- [Bun](https://bun.sh/) (última versão)
- [Node.js](https://nodejs.org/) (recomendado v18+)

## Instalação

1. Clone o repositório:
```bash
git clone [seu-repositorio]
cd amazon-scraper
```

2. Instale as dependências:
```bash
bun install
```

## Como Executar

1. Inicie o servidor backend:
```bash
bun run server.js
```

2. Em outro terminal, inicie o frontend:
```bash
bun run dev
```

3. Acesse a aplicação em `http://localhost:5173`

## Estrutura do Projeto

```
amazon-scraper/
├── server.js        # Servidor Express e lógica de scraping
├── index.html       # Interface do usuário
├── style.css        # Estilos da aplicação
├── package.json     # Dependências e scripts
└── README.md        # Documentação
```

## Notas

- Este scraper foi desenvolvido apenas para fins educacionais e de avaliação técnica
- O projeto demonstra boas práticas de programação como:
  - Separação de responsabilidades (frontend/backend)
  - Código limpo e bem organizado
  - Tratamento adequado de erros
  - Interface responsiva e intuitiva
  - Documentação clara

## Considerações de Desenvolvimento

- Implementação focada em demonstrar conhecimentos fullstack
- Código comentado e estruturado para fácil compreensão
- Utilização de práticas modernas de desenvolvimento web
- Atenção à experiência do usuário e design responsivo

## Autor

[Seu Nome]

---
*Este projeto é parte de um processo seletivo e deve ser utilizado apenas para fins de avaliação.* 