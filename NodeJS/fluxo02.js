//função assyncrona
function calc(valor){
    //retorna 2 metodos
    return new Promise((resolve, reject)=>{
         setTimeout(() =>{
            resolve(5 * valor)
        }, 2000);
    })    
}
calc(10)
// .then() passa aqui caso ocorra tudo ok
.then((retorno) => {
    console.log(`Valor de retorno: ${retorno}`)
})

// //função assyncrona
// function calc(valor){
//     //retorna 2 metodos
//     return new Promise((resolve, reject)=>{
//          setTimeout(() =>{
//             reject(5 * valor)
//         }, 2000);
//     })    
// }
// calc(10)
// // .then() passa aqui caso ocorra tudo ok
// .then((retorno) => {
//     console.log(`Valor de retorno: ${retorno}`)
// })
// .catch((error)=>{
//     console.log(`Valor de ERROR: ${error}`)
// })
