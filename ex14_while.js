const read = require('readline-sync')

let num = parseInt(read.question("Digite um numero: "))
let contador = 1

while (contador <= num) {
    console.log(contador++)
}