// Entruturando dados com Array

var numeros = []; 

while(true) { 
	var numero = prompt("Digite um número ou S para sair"); 
	if (numero == 'S') { 
		break; 
	} else { 
		numeros.push(Number(numero)); 
	} 
} 

var soma = 0; 
for (i = 0;i < numeros.length;i++) { 
	soma += numeros[i]; 
} 

var resultado = soma / numeros.length; 
console.log(resultado);
