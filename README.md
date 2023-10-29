# TYPESCRIPT + POSTGRESQL + DOCKER BACKEND TEST

## Sumário
- [Introdução](#introdução)
- [Instalação](#instalação)
- [Endpoints](#endpoints)

## **Introdução**

Backend para um formulário de cadastro de usuários, é possível registrar usuários e cores, tendo em vista que as cores disponíveis para o campo **favorite_color** podem mudar, todos os dados são salvos em um banco de dados Postgres. <br>
Como não foi citado, nenhum ORM foi utilizado.

## **Instalação**

Para instalar basta rodar os dois comandos abaixo, quando o segundo comando foi executado a API já estará disponível para ser utilizada.
```console
$ docker compose build
$ docker compose up
```

## Endpoints

### Cadastrando Usuários

###  **_`/api/v1/users`_**
![POST](https://img.shields.io/badge/-POST-green) <br>

Um objeto no formato abaixo é esperado para que um usuário seja cadastrado com sucesso:

```json
{
  "name": "string",
  "document": "string",
  "email": "string",
  "favorite_color": "string",
  "comments": "string"
}
```

O valor do campo **favorite_color** deve ser uma das cores cadastradas no banco de dados, inicialmente estão disponíveis apenas as cores do arco-íris, porém outras podem ser cadastradas utilizando o endpoint de cadastro de cores. <br>
O valor do campo **document** é uma primary key no banco de dados, ou seja, um documento só pode ser cadastrado uma única vez, caso contrário a API irá retornar 409.

### Cadastrando Cores

###  **_`/api/v1/colors`_**
![POST](https://img.shields.io/badge/-POST-green) <br>

Um objeto no formato abaixo é esperado para que uma cor seja cadastrada com sucesso:

```json
{
  "name": "string",
}
```

O valor do campo **name** deve ser único, caso já esteja cadastrado a API irá retornar 409.

### Listando Cores

###  **_`/api/colors`_**
![GET](https://img.shields.io/badge/-GET-blue) <br>

Endpoint para listar as cores, poderia ser utilizado para exibir as cores disponíveis no formulário.