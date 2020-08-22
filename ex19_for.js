// Um programa que exiba somente os números múltiplos de 3 e de 5 (de N a 1)

const read = require('readline-sync')

let num = parseInt(read.question("Digite um valor: "))

for (let contador = num; contador >= 1; contador--){
    if(contador % 3 === 0 || contador % 5 === 0) {
        console.log(contador)
    }
}