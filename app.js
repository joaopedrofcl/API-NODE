//Chamando o mudulo express para a variavel express
const express = require('express')

//chamando a função express() para a variavel app
const app = express()


app.use(function(req , res , next){
    res.status(200).send('<h1>Olá mundo</h1>')

})


//tornado a variavel app exportavel para usar no arquivo server.js
module.exports = app 