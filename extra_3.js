/*
Faça um Programa que leia três números e mostre o maior deles.
*/

const readline = require('readline-sync')

const n1 = parseFloat(readline.question('Digite o primeiro numero: '))
const n2 = parseFloat(readline.question('Digite o segundo numero: '))
const n3 = parseFloat(readline.question('Digite o terceiro numero: '))

if (n1>n2 && n1>n3){
    console.log(`O maior número é o ${n1}.`)
} else if (n2>n1 && n2>n3){
    console.log(`O maior número é o ${n2}.`)
} else {
    console.log(`O maior número é o ${n3}.`)
}