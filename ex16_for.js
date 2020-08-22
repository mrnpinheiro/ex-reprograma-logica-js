// Print dos números pares a partir de um valor até 0


const read = require('readline-sync')

function anunciacao(numero) {
    console.log(`Esse é par: ${numero}`)
}

let num = parseInt(read.question("Digite um valor: "))

for (let contador = num; contador >=1; contador--){
    if(contador % 2 === 0) {
        console.log(contador)
    }
}