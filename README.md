<header align="center" >
  <img align="center" src="./.github/dev-radar-nodejs.svg" alt="Dev Radar">
  <p align="center">
    Back-End da Aplicação usando NodeJS
  </p>

  <p align="center" style="margin-top: 15px;">
    <a href="https://insomnia.rest/run/?label=Dev%20Radar&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fwill-souza97%2F01-dev-radar_backend%2Fmaster%2FRun_Insomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
  </p>

</header>

<p align="center" style="margin-top: 15px;">
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#instrucao">Instruções para o Backend</a>
</p>

<h1 id="tecnologias">Tecnologias</h1>

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [`Express`](https://www.npmjs.com/package/express)
- [`Mongoose`](https://www.npmjs.com/package/mongoose)
- [`Socket.io`](https://www.npmjs.com/package/socket.io)
- [`Axios`](https://www.npmjs.com/package/axios)
- [`Yup`](https://www.npmjs.com/package/yup)
- [`Cors`](https://www.npmjs.com/package/cors)
- [`Dotenv`](https://www.npmjs.com/package/dotenv)

<h1 id="projeto">Projeto</h1>

O Dev Radar é uma aplicação de construida com uma API de geolocalização,
onde é possível cadastrar e excluir Devs e tambem realizar uma Busca por
Devs de acordo com as Tecnologias informadas.

<h1 id="instrucao">Instruções para o Backend</h1>

Você precisará ter instalado na sua máquina o Node.js e o Yarn.

- Executar o comando `yarn` para fazer o dowload de todas as dependências necessárias para executar o projeto.

A aplicação precisará se conectar ao Banco NoSQL MongoDB.

- Copie todo o conteudo do arquivo `.env.example` e cole em um arquivo chamado `.env`
- Se você estiver com o MongoDB instalado na sua máquina preencha somente a variavel `DB_NAME`:

      DB_NAME= myDatabase

- Se você quiser conectar ao MongoDB Atlas preencha as seguintes variaveis de acordo com a String de conexão fornecida pelo MongoDB Atlas:
- Exemplo da String que irá ser fornecida pelo MongoDB Atlas:

  - `mongodb+srv://(username):(password)@(nameCluster).abcd.mongodb.net/myDatabase?retryWrites=true&w=majority`

        MONGO_URL= mongodb+srv://(username):(password)@(nameCluster).abcd.mongodb.net

        DB_NAME= myDatabase

        MONGO_PERMISSION= retryWrites=true&w=majority

Feitas as configurações, execute `yarn dev` para que o backend esteja funcionando
