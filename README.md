# API REST SWAPI - Star Wars - Projeto Node React
[Link Postman Collection](https://elements.getpostman.com/redirect?entityId=21956516-78004321-08d4-4c3e-a84b-2ec5a7bc2f8e&entityType=collection "Link Postman Collection")

## Sobre o projeto
- App realiza pesquisa pelo nome ou parte do nome do personagem.
- Marca um personagem como favorito.
- Desmarca um personagem como favorito.
- Lista todos os personagens marcados como favorito.

## Tecnologias utilizadas no Front-end

- React
- Yarn
- Vite
- TypeScript
- HTML
- CSS

## Tecnologias utilizadas no Back-end

- NodeJS
- Express
- MySQL

## Ferramentas utilizadas

- Visual Studio Code
- MySQL Workbench
- Postman
- Git

## Deploy

- Front-end no Vercel.com
- Back-end no Railway.app

## Instruções

```bash
# Criar Base de Dados MySQL/MariaDB
CREATE DATABASE swapinodejs;
```

## Como executar o projeto Back-end

```bash
# clonar repositório
git clone https://github.com/renatohvo/nodereactapi-swapi.git

# entrar na pasta do projeto backend
cd backend

# Alterar o arquivo .env de acordo com sua conexão MySQL/MariaDB
CONNECTION_STRING=mysql://user:password@server:port/swapinodejs

# baixar os pacotes do projeto
npm install

# executar o projeto
nodemon server.js

# URL/Porta do projeto backend em execução
http://localhost:8000/

# Recurso para baixar base de dados dos nomes dos personagens da API SWAPI
http://localhost:8000/seeding
```

## Como executar o projeto Front-end

```bash
# clonar repositório
git clone https://github.com/renatohvo/nodereactapi-swapi.git

# entrar na pasta do projeto frontend
cd frontend

# baixar os pacotes do projeto
npm install

# executar o projeto
yarn vite

# URL/Porta do projeto frontend em execução
http://localhost:3000/
```

## Recursos

```bash
# Baixar Base de Dados dos Nomes dos Personagens
/seeding

# Buscar todos os personagens
/people

# Buscar todos os personagens por nome ou parte do nome
/people/:name

# Buscar todos os personagens marcados como favorito
/people/favorite/:favorite

# Ex: Marcar personagem como favorito
/people/:id/favorite/:favorite

```

## Autor

Renato Henrique Vasconcelos

https://www.linkedin.com/in/renatohvo/

## 

<div display: inline-block>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" width="100" heigth="100" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="80" heigth="80" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="80" heigth="80" />
    <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" width="80" height="80"/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" alt="Git" width="80" heigth="80" />
</div>
<div display: inline-block>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="80" heigth="80" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" width="80" heigth="80" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="80" heigth="80" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="80" heigth="80" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="80" heigth="80" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="80" heigth="80" />
</div>
