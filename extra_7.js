/*
Faça um algoritmo que imprima números inteiros de n a 1 
(Ex.: O usuário digita o número 10. Você deve listar 10, 9, 8, 7, 6, 5, 4, 3, 2, 1);
*/

const readline = require('readline-sync')
const num = parseFloat(readline.question('Digite um numero: '))

for (let contador = num; contador >=1; contador--){
    console.log(contador)
}