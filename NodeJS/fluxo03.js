//ASYNC E AWAIT

// //função assyncrona
function calc(valor){
    //retorna 2 metodos
    return new Promise((resolve, reject)=>{
         setTimeout(() =>{
            resolve(5 * valor)
        }, 5000);
    })    
}
async function main (){
    try {
        let retorno = await calc(10)
        console.log(`Valor de Sucesso: ${retorno}`)
    } catch (error){
        
    }
    
}
main()

