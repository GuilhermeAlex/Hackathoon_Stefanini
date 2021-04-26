// Importação de módulos
const express = require('express')
const exec13Route2 = express.Router()

// Método HTTP POST: Server para o envio de informações
exec13Route2.post('', (req, resp) => {
    let body = req.body
    resp.send(`linguagem: ${body.linguagem}\nEmpresa: ${body.empresa}\nProfessor: ${body.professor}`)
})

// Método HTTP PUT: Faz a substituição completa de um documento 
exec13Route2.put('/:identificador', (req, resp) => {
    resp.send(`Metodo PUT utilizado para atualizar o id ${req.params.identificador}`)
})

// Método HTTP PATCH: Realiza atualizações parciais a um recurso
exec13Route2.patch('/:identificador', (req, resp) => {
    resp.send(`Metodo PATCH utilizado para atualizar o id ${req.params.identificador}`)
})

// Método HTTP DELETE: Utilizado para remover um recurso específico
exec13Route2.delete('/:identificador', (req, resp) => {
    resp.send(`Metodo DELETE utilizado para atualizar o id ${req.params.identificador}`)
})

module.exports = exec13Route2