//Tipos de Console
console.log('Barões do Javinha ')

const timesCariocas = ['Vasco', 'Flamengom', 'Fluminense', 'Internacional']
console.table(timesCariocas)

console.count('contador1')
console.count('contador2')

console.countReset('contador1')

//inicio contador
console.time('tempo')
for (let index = 0; index < 10; index++) {
    console.log('-')
}
//final do contador 
console.timeEnd('tempo')

//console.clear() limpa o console

//console.assert(true, 'Assert is true')
//console.assert(false, 'Assert is false')


