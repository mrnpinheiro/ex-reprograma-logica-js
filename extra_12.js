/*
Crie uma função que receba um número qualquer devolva o seguinte padrão 
como resultado (inclusive com os espaços). Por exemplo, caso receba o número 5 como parâmetro:
*
**
***
****
*****
******
DESAFIO EXTRA: refaça o exercício acima, porém agora com o seguinte padrão:
    *
   **
  ***
 ****
*****
*/

const readline = require('readline-sync')
const num = parseFloat(readline.question('Digite um numero: '))
const parametro = '*'
const parametro2 = ' '

for (let contador = 1; contador <= num; contador++){
    console.log(`${parametro2.repeat(num - contador)} ${parametro.repeat(contador)}`)
}