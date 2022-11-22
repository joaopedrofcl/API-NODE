//importando nossas dependências 
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')

const app = express()

app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.json())

app.listen(3000 , () => {
    console.log('Express está rodando na porta 3000')
})