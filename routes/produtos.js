const express = require('express')
const router = express.Router()

router.get('/' , function(req , res , next){
    res.status(200).send({
        mensagem: "usando get dentro da rota de produtos"
    })

})

router.post('/' , function(req , res , next){
    res.status(201).send({
        mensagem: "usando post dentro da rota de produtos"
    })

})

module.exports = router