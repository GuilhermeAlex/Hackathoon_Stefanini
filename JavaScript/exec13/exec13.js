// Aplicando filter and Map na lista de convidados

var convidados = [ 
	{nome: 'Felipe', idade: 29, genero: 'masculino'}, 
	{nome: 'Allana', idade: 22, genero: 'feminino'}, 
	{nome: 'Thiago', idade: 33, genero: 'masculino'}, 
	{nome: 'Carlos', idade: 16, genero: 'masculino'}, 
	{nome: 'Aline', idade: 15, genero: 'feminino'} 
];

//impressão dos convidados ja com o filtro
var convidadosFiltrados = convidados.sort(function(a, b) { 
	return (a.nome > b.nome) ? 1 : -1; // 1 B precede A, -1 A precede B
}).filter(function(item) { 
	return item.idade >= 18; 
});

console.log(convidadosFiltrados);