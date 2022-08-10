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

router.get('/:id_produto' , function(req , res , next){
    const id = req.params.id_produto
    if (id==="especial"){
        res.status(200).send({
        mensagem: "você encontrou o id especial" ,
        id: id
        })
    }
    else{
        res.status(200).send({
        mensagem: "você enviou um id" 
    })
}
    
})



module.exports = router