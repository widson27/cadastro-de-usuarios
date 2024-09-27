# Descrição do Projeto: Sistema de Cadastro de Usuários com React, Vite, Hooks, Axios e useRef

![cadastro-de-usuarios img](https://github.com/user-attachments/assets/d45837ad-3fe4-424b-8434-818f4ce52211)

## Objetivo
Este projeto visa criar um sistema de cadastro de utilizadores que consome uma API externa para registar e listar utilizadores de forma dinâmica. A aplicação será desenvolvida em React com Vite, utilizando Axios para requisições HTTP e React Hooks, incluindo useRef, para gestão eficiente do estado e manipulação direta de elementos do DOM.

## Funcionalidades:
### Formulário de Cadastro com useRef:

  - Um formulário com campos de entrada para "Nome", "Email" e "Idade".
  - Em vez de usar o useState para controlar os valores do formulário, será utilizado useRef para obter os valores diretamente dos inputs de forma eficiente, sem causar re-renderizações desnecessárias. Isso é útil quando não há necessidade de manter o estado do formulário no ciclo de renderização.
  - Ao submeter o formulário, os dados serão enviados para a API utilizando Axios.

### Envio dos Dados com Axios:

  - Axios será utilizado para fazer uma requisição POST que envia os dados do formulário para uma API de backend.
  - useRef será utilizado para capturar o valor dos inputs no momento da submissão.

### Listagem Dinâmica de Usuários (useEffect + useState):

    - A aplicação fará uma requisição GET à API para buscar a lista de utilizadores cadastrados.
    - A lista será armazenada no estado com useState e será exibida dinamicamente na tela.
    - A lista será atualizada automaticamente após o cadastro de um novo utilizador.

### Atualização de UI em Tempo Real:

  - Após a submissão bem-sucedida, a lista de utilizadores cadastrados será atualizada sem recarregar a página.
  - useEffect será usado para realizar a chamada à API de listagem de utilizadores assim que a página carregar ou após o cadastro de um novo utilizador.

### Feedback Visual:

  - Mensagens de sucesso ou erro serão exibidas ao utilizador após o envio do formulário.

## Tecnologias Utilizadas:

### React + Vite: para criar uma aplicação front-end rápida e interativa.
### Axios: para requisições HTTP (POST para cadastrar e GET para listar utilizadores).

### React Hooks:

  - useState para armazenar e atualizar a lista de utilizadores.
  - useEffect para carregar a lista ao iniciar a aplicação e atualizar após cada cadastro.
  - useRef para capturar os dados do formulário sem re-renderizações desnecessárias, otimizando a performance.
    
## Fluxo do Sistema:

  - O utilizador abre a aplicação e vê o formulário de cadastro.
  - Ao preencher os campos, o valor dos inputs é capturado diretamente via useRef.
  - O utilizador submete o formulário e os dados são enviados à API usando Axios (POST).
  - Após a resposta da API, a lista de utilizadores é atualizada em tempo real e exibida na interface.
    
## Comandos para rodar:
  - npm run dev
  - json-server --watch -p 3000 db.json 
