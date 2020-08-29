/*
Faça um Programa que leia um numero e escreva a tabuada do mesmo de 1 a 10.
*/

const readline = require('readline-sync')
const num = parseFloat(readline.question('Digite um numero: '))

if(num <= 0 || num > 0){
    console.log(`Tabuada do ${num}`)
    for (let contador = 10; contador >=1; contador--){
        console.log(`${num} * ${contador} = ${num*contador}`)
    }
} else{
    console.log("Tente novamente apenas com números. =)")
}