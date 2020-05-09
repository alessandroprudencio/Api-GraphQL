# Crud de usuários com GraphQL

## Vamos começar!

Essas instruções fornecerão uma cópia do projeto em execução na sua máquina local, para fins de desenvolvimento e teste. Consulte me  para obter notas sobre como implantar o projeto em produção.

### Pré-requisitos

O que você precisa para instalar o software e como instalá-lo

```
npm
yarn
knex cli
node.js ^12.16.3
```

### Instalação

```
git clone https://github.com/alessandroprudencio/Api-GraphQL.git
```

```
cd Api-GraphQL 
```

```
yarn install
```
Crie um arquivo .env no root da sua aplicação utilizando como exemplo o .env_example e crie um banco de dados como o mesmo nome que esteja no seu .env...

```
na raiz do projeto digite: cd /src
```

```
knex migrate:latest

```

```
yarn dev
```

Pronto sua aplicação estará  rodando no endereço http://localhost:4000...
___

# API endpoints

## GET USERS
`query{
	users{
    id
    name
    email
    password
  }
}` 
<br/>

## GET USER BY ID
`query {
  user(id: 1) {
    id
    name
    email
    password
  }
}
` 
## CREATE USER
`
  mutation {
  createUser(
    name: "alessandro"
    email: "ale@gmail.com"
    password: "13233"
  ) {
    id
    name
    email
  }
}`

## UPDATE USER
`mutation {
  updateUser(id: 1, name: "sandro", email: "ale@gmail.com", password: "13233") {
    id
    name
    email
  }
}
`

## DELETE USER
`mutation {
  deleteUser(id: 1)
}
`
___

## Construído com

* [GraphQL ](https://graphql.org/)
* [Node JS](https://nodejs.org/)

## Contribuição

Faça um Fork do projeto
Crie uma Branch para sua Feature (git checkout -b feature/FeatureIncrivel)
Adicione suas mudanças (git add .)
Comite suas mudanças (git commit -m 'Adicionando uma Feature incrível!)
Faça o Push da Branch (git push origin feature/FeatureIncrivel)
Abra um Pull Request

## Author

* Alessandro Prudencio 
* alessandroconectado@gmail.com
* +55 (67) 99269-6705
* [Linkedin](https://www.linkedin.com/in/alessandro-prudencio/)


