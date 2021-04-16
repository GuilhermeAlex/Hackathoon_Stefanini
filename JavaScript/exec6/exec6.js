var sair = "n";
var resultado = 0;
while(sair != "n"){
    var numero = prompt("Insira alguns numeros para ser somados, para finalizar digite n");
    if(numero == "n"){
        sair = "n";
    }else{
        resultado += Number(numero);
    }
} alert("O resultado das somas é: "+resultado);