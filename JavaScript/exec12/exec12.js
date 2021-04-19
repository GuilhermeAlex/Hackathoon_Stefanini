//Array listando convidados
var convidados = []; 

while(true) { 
    //variaveis com as solicitações
	var nome = prompt("Insira o nome do convidado ou precione S para sair"); 
	var idade = Number(prompt("Insira a idade do convidado")); 
	var cpf = prompt("Insira o CPF do convidado"); 

	if (nome == "S") { 
		break; 
	} else { 
        //puxando o array do convidado para inserir
	convidados.push({nome: nome, idade: idade, cpf: cpf}); 
	} 
} 

console.log(convidados);