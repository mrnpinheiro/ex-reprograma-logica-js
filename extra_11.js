/*
Crie uma função que receba um número qualquer devolva o seguinte padrão 
como resultado (inclusive com os espaços). Por exemplo, caso receba o número 5 como parâmetro:
*
**
***
****
*****
******
*/

const readline = require('readline-sync')
const num = parseFloat(readline.question('Digite um numero: '))
const parametro = '*'

for (let contador = 1; contador <= num; contador++){
    console.log(`${parametro.repeat(contador)}`)
}