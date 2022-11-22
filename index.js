//importando nossas dependências 
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')

const app = express()

app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.json())

let db =[
    {"1":{Nome: 'Jorge' , peso: '75'}},
    {"2":{Nome: 'Carlos' , peso: '63'}},
    {"3":{Nome: 'Pedro' , peso: '98'}},
    {"4":{Nome: 'Matheus' , peso: '80'}}
]

app.get('/' , (req , res) =>{
    return res.json(db)
})

app.post('/add' , (req , res) =>{
    const body =req.body
    if (!body)
    return res.status(400).end
    db.push(body)
    return res.json(body)})

app.listen(3000 , () => {
    console.log('Express está rodando na porta 3000')
})