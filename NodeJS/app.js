const express = require('express')
const app = express()
const hackathonRoute = require('./routes/hackathonRoute')
//Metodo de middleware / funções executadas entre uma requisição
app.use(express.json())
//toda vez que tiver o /hackathon ele vai direto para a rota do hackathonRoute
app.use('/hackathon', hackathonRoute)

app.get('/',(req, resp) =>{
    resp.send('Projeto Hackathon Stefanini')
})


app.listen(3000, ()=>{
    console.log('Server is running...')
})


