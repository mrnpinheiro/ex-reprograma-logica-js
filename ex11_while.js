const read = require('readline-sync')

let num;

do {
    let num = read.question("Digite um numero: ")
} while (num < 10)