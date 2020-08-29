/*
Crie uma função que receba um número e imprima no console de 0 até o número informado. 
Além disso, cada vez que imprimir o número, informe se é par ou ímpar. 
Exemplo: recebendo 5, deve imprimir: "0 é par", "1 é ímpar", "2 é par", "3 é ímpar", "4 'par", "5 é ímpar".
*/

const readline = require('readline-sync')
const num = parseFloat(readline.question('Digite um numero: '))

for (let contador = 0; contador <= num; contador++){
    if(contador % 2 == 0){
        console.log(`${contador} é par`)
    } else{
        console.log(`${contador} é ímpar`)
    }
}