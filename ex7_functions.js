// Criar função para soma, subtração, multiplicação e divisão - recebendo 2 parâmetros
// Multiplicação e divisão não aceitar valores = 0


function soma(numero1, numero2){
    return numero1 + numero2
}

function subtracao(numero1, numero2){
    return numero1 - numero2
}

function multiplicacao(numero1, numero2){
    return numero1 * numero2
}

function divisao(numero1, numero2){
    return numero1 / numero2
}


const readline = require('readline-sync')

const operacao = readline.question('Qual operacao voce quer calcular (1 - Soma, 2 - Subtracao, 3 - Multiplicacao ou 4 - Divisao)? ')

if (operacao >= 1 && operacao <=4) {
    const numero1 = parseFloat(readline.question('Qual primeiro numero? '))
    const numero2 = parseFloat(readline.question('Qual segundo numero? '))


    if (operacao == 1){
        console.log(soma(numero1, numero2))
    } else if (operacao == 2){
        console.log(subtracao(numero1, numero2))
    } else if (numero1 == 0 || numero2 == 0){
        console.log("Não podemos fazer essa operação, pois um dos números é 0.")
    } else if (operacao == 3) {
        console.log(multiplicacao(numero1, numero2))
    } else if (operacao == 4) {
        console.log(divisao(numero1, numero2))
    } 
    }

else {
    console.log("Digite um número de operação válido!")
}