var valor1 = Number(prompt("Digite o primeiro valor: "));
var valor2 = Number(prompt("Digite o ultimo valor: "));
var incremento = Number(prompt("Digite o valor de incremento: "));

for(var x =valor1; x < valor2; x+= incremento){
    console.log(Math.log(x));
}
