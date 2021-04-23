//função assyncrona
//SALARIO BRUTO 10K , 0.15 = FGTS, 0.11 = INSS, 0.05 = VALE ALIMENTAÇÃO 
function calculaSalario(salarioBruto,callback){
    return setTimeout(() =>{
        salarioBruto =  salarioBruto - (salarioBruto * 0.15) -(salarioBruto * 0.11) - (salarioBruto * 0.05)
         return callback(null, salarioBruto)
    }, 5000);
}
// função de callback
function mostraSalario(err, retorno){
    if (err) throw err
    console.log(retorno)
}
calculaSalario(10000, mostraSalario)