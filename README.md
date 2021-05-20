# W'Cep

## 💻 Projeto

Aplicativo para de pesquisa de cep, utilizando a api do viaCep ele busca informações complementares referente ao cep pesquisado.

## Tecnologias

esse projeto utiliza:

Para o front-end:
- Next.js
- React.js
- Sass
- TypeScript

Para o Back-end:
- Node.js
- Express.js
- TypeScript
- TypeORM

## Pré-requisitos:

### Variavies de ambiente:

Este projeto utiliza a api do [Mapbox](https://www.mapbox.com/) para geração dos mapas. É necessario criar uma conta para e gerar um Aceess Token

apos criar o token ele sera utilizado tanto no backend quando no app web

para o back-end:
- crie um arquivo .env dentro da pasta backend e crie a variavel ```MAPBOX_KEY```

para o app we:
- crie um arquivo .env dentro da pasta web e cria a variavel ```NEXT_PUBLIC_MAPBOX_TOKEN```

### Executando o projeto

Você precisa do **NodeJs** e um gerenciador de dependencias(**NPM ou YARN**) em sua maquina.

```sh
// abrir um terminal para o backend e outro para o app web e rode o comando:

// instalando as dependencias:
npm install
// ou 
yarn install

// executando o projeto:

npm dev
// ou
yarn dev 
```

## 👨🏻‍💻 Author:

- **Sander Paniago** - [LinkedIn](https://www.linkedin.com/in/sander-paniago/) - [instagram](https://www.instagram.com/sander_paniago/)

## 🚀 Build

link para a [demo](https://wcep.sanderpaniago.dev/)

## 🗝 licenças

Este projeto é licenciado sobre a licença MIT - [LICENSE.md](LICENSE.md) para mais informações.
