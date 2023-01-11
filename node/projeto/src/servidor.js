const porta = 3003

const { response } = require('express')  
const express = require('express')      // import express
const bodyParser = require('body-parser')

const app = express()  // instanciei o express

const bancoDados = require('./bancoDados')

// midd via transform o corpo da requisção em  obj para facilitar a leitura
app.use(bodyParser.urlencoded({extended:true})) 


app.get('/produtos',(req,res,next)=> {
    res.send(bancoDados.getProdutos()) 
})

/// segundo get com params
app.get('/produtos/:id',(req,res,next)=> {
    res.send(bancoDados.getProduto(req.params.id)) 
})

//salvar
app.post('/produtos',(req,res,next) => {
    const produto = bancoDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

//alterar
app.put('/produtos/:id',(req,res,next) => {
    const produto = bancoDados.salvarProduto({
        id:req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})


app.delete('/produtos/:id',(req,res,next) => {
    const produto = bancoDados.excluirProduto(
       req.params.id
    )
    res.send(produto) //JSON
})

app.listen(porta,() => {
    console.log(`Servidor executando na porta ${porta}.`)
})