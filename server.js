// Chamando o Modulo http
const http = require('http')

const app = require('./app')

//definindo um a porta 
const port = process.env.PORT || 3000

//criando servidor e inserindo o objeto app para criar aplicação
const server = http.createServer(app)

//definindo a porta que o servidor usará
server.listen(port)