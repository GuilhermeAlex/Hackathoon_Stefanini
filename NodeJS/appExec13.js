const express = require('express')
const app = express()
const exec13Route2 = require('./routes/exec13Route2')

/** Metodo de Middleware */
app.use(express.json())
//LOCALIZA AS INFORMAÇÕES
app.use('/exec13Route2', exec13Route2)

app.get('/', (req, resp)=>{
    // resp.send('Projeto NODE JS Stefanini')
    resp.sendFile('index.html', {root: __dirname })
})

app.listen(1357, ()=>{
    console.log('Server "http://localhost:1357" is running...')
})