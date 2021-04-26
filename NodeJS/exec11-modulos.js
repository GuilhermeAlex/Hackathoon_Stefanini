//função assyncrona
function calcularSalario(salarioBruto){
    //retorna 2 metodos
    return new Promise((resolve, reject)=>{
         setTimeout(() =>{
            resolve(salarioBruto - (salarioBruto * 0.15) -(salarioBruto * 0.11) - (salarioBruto * 0.05))
        }, 5000);
    })    
}
async function main (){
    try {
        let retorno = await calcularSalario(10000)
        console.log(`Salario já descontado: ${retorno}`)
    } catch (error){
        console.log(`Mensagem de ERROR: ${error}`)
    }
}
var textoTela = "Importação do arquivo 10 para o arquivo 11"
module.exports={textoTela,main}