//Chamando o mudulo express para a variavel express
const express = require('express')

//chamando a função express() para a variavel app
const app = express()

//chamando a rota de produtos criada no arquivo produtos.js
const rotaProdutos = require('./routes/produtos')

app.use("/produtos", rotaProdutos)


//tornado a variavel app exportavel para usar no arquivo server.js
module.exports = app 