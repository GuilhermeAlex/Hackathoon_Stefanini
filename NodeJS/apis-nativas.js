//importa um modulo para ser atualizado na implementação
const http = require('http') 

const host = '127.0.0.1'
//port é ponto
const port = '9876' //porta default geralmente é 3 mil
const url = `http://${host}:${port}`

const server = http.createServer((req, resp)=>{
    // cod 200 sucesso
    // 500 erro de servidor
    //404 pagina nn encontrada
    resp.statusCode = 200
    resp.setHeader('Content.Type', 'text/plain', 'charset=UTF-8')
    resp.end('<h1>Ola Galera! Me chamo Guilherme Alex</br></h1>' + '<p>A Tecnologia NodeJS vai agregar muito para a minha carreira como Dev Java Jr e espero que eu possa me desenvolver bem nessa nova experiência com nodeJS e implementar nos projetos a frente! </p>')
})
server.listen(port, host, ()=> {
    console.log(`Server: ${url} is running`)
})