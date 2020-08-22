/* 
Crie uma função com as seguintes características:

1. A função deve receber 3 parâmetros
2. Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a string: "Preencha todos os valores corretamente!"
3. O retorno da função deve ser a multiplicação dos 3 parâmetros, somando `2` ao resultado da multiplicação.
*/

function multiplicacaoSoma(valor1, valor2, valor3) {
    return (valor1 * valor2 * valor3) + 2
}

const readline = require('readline-sync')

const valor1 = readline.question('Digite o primeiro valor: ')
const valor2 = readline.question('Digite o segundo valor: ')
const valor3 = readline.question('Digite o terceiro valor: ')

if (valor1 == "" || valor2 == "" || valor3 == ""){
    console.log("Preencha todos os valores corretamente!")
} else {
    console.log(multiplicacaoSoma(valor1, valor2, valor3))
}