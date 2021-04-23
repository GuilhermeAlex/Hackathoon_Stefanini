//função assyncrona
function calcularSalario(salarioBruto){
    //retorna 2 metodos
    return new Promise((resolve, reject)=>{
         setTimeout(() =>{
            resolve( salarioBruto - (salarioBruto * 0.15) -(salarioBruto * 0.11) - (salarioBruto * 0.05))
        }, 5000);
    })    
}
calcularSalario(10000)
// .then() passa aqui caso ocorra tudo ok
.then((retorno) => {
    console.log(`Salario total após os descontos: ${retorno}`)
})