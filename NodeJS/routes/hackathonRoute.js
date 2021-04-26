const express = require('express')
const hackathonRoute = express.Router()

hackathonRoute.get('/:identificador',(req, resp) =>{
    resp.send(`Dados do Hackathon Stefanini. Identificador: ${req.params.identificador}`)
})

hackathonRoute.post('', (req, resp)=>{
    let body = req.body;
    rep.send(`informações do usuario. Nome: ${body.nome}\nTelefone: ${body.telefone}`)
})

hackathonRoute.put('/:identificador', (req, resp) =>{
    resp.send(`Dados do Hackathon Stefanini. Metodo Put. Identificador: ${req.params.identificador}`)
})

hackathonRoute.patch('/:identificador', (req, resp) =>{
    resp.send(`Dados do Hackathon Stefanini. Metodo Patch. Identificador: ${req.params.identificador}`)
})

hackathonRoute.delete('/:identificador', (req, resp) =>{
    resp.send(`Dados do Hackathon Stefanini. Metodo delete. Identificador: ${req.params.identificador}`)
})

module.exports = hackathonRoute