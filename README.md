<div>
	<h1 align="center">Back-end Challenge 2021 🏅 - Space Flight News</h1>
</div>

Projeto que consome os dados da API [Space Flight News](https://api.spaceflightnewsapi.net/v3/documentation)

### Tecnologias utilizadas
* NodeJS
* TypeScript
* MySQL
* TypeORM

### Clone do repositório

Para realizar a clonagem do repositório bastar executar o comando:

- ambiente **SSH**

  `git clone git@github.com:HerdesonMourao/CoodeshChallenge-01.git`

- ambiente **HTTPS**

  `git clone https://github.com/HerdesonMourao/CoodeshChallenge-01.git`

### Configurando o projeto

Assim que tiver feito o clone do projeto, acesse a pasta `CoodeshChallenge-01` que foi criada em seu computador. Já dentro da pasta auditore-api, faça uma cópia do arquivo `.env.example` e renomei a cópia com o nome `.env`, feito isso, basta acessar o arquivo `.env` e modificar as variaveis **DB_HOST, DB_DATABASE, DB_USERNAME e DB_PASSWORD** com os valores do seu ambiente de desenvolvimento.

Após feito essa primeira configuração, execute o comando `npm install` ou `npm i`, para que o sistema faça a leitura do arquivo package.json e instale as dependências e crie os arquivos do **node_modules**.

###  Criando o banco de dados ###
Para criar o banco de dados execute o comando `npm run migration`. Para popular o banco de dados utilize o arquivo **insomnia que esta na pasta recursos**, utilize o arquivo mais atual.

### Executando o projeto ###
Agora que foi realizado as configurações do projeto e o banco de dados foi criado, basta executar o comando `npm run dev` para executar o servidor.


>  This is a challenge by [Coodesh](https://coodesh.com/)