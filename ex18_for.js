// Um programa que exiba somente os números múltiplos de 3 e de 5 (de 1 a N)

const read = require('readline-sync')

let num = parseInt(read.question("Digite um valor: "))

for (let contador = 1; contador <= num; contador++){
    if(contador % 3 === 0 || contador % 5 === 0) {
        console.log(contador)
    }
}