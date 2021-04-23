const {EventEmitter} = require('events')
//Criando um evento
const evento = new EventEmitter()

//Ouvindo um evento
evento.on('nomeDoEvento', (user,mensagem)=>{
    console.log(`Usuario: ${user} Possui uma mensagem: ${mensagem}`)
})
//método Publicando um evento
evento.emit('nomeDoEvento','Guilherme Alex', 'Mensagem Enviada pelo evento')
evento.emit('nomeDoEvento','Cassia Dias', 'Mensagem Enviada pelo evento do Gui')
