


<h1 align="center">
  <br>
  <a href=""><img src="https://cdn-icons-png.flaticon.com/512/6410/6410570.png" alt="Mars Rover" width="250"></a>
</h1>


<h4 align="center">Aplicação que aplica conceitos básicos de lógica de programação e adonisJS em um frontend simples e intuitivo</h4>


<p align="center">
  <a href="#key-features">Funcionalidades</a> •
  <a href="#how-to-use">Como Usar</a> •
</p>


## Funcionalidaes

* Controle do Mars Rover
  - Permite o usuario inserir uma posição e orientação para o Mars Rover pousar, bem como um conjunto de instruções processadas e armazenadas por uma API       em adonisJS, como resultado a nova posição e orientação do Rover são retornados.
  
## Como Utilizar

Para clonar e executar esta aplicação, você precisará do[Node.js](https://nodejs.org/en/download/) (que vem com [ npm](http://npmjs.com)) instalado em seu computador. Passo a passo de execução:

```bash
# Clonar Repositório
$ git clone https://github.com/DaviMAC02/Mars_Rover.git

# Assegurar que tenha um banco de dados MariaDB e um arquivo .env com as devidas credenciais

# Download backend
* Entrar na pasta mars_rover_backend
$ npm install
$ node ace migration:run
$ npm run dev

#Frontend
Basta abrir o arquivo index.html (lembre de checar no arquivo script.js se o caminho localhost e porta conferem com o seu servidor backend)
