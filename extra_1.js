/*
Faça um programa que calcule o aumento de um salário. 
Ele deve solicitar o valor do salário e a porcentagem do aumento. 
Exiba o valor do aumento e do novo salário.
*/
function novoSalario(salario, aumento) {
    return salario * (1 + aumento)
}

const readline = require('readline-sync')

const salario = parseFloat(readline.question('Digite seu salario atual: '))
const aumento = parseFloat(readline.question('Digite a % do aumento (Ex: 0.10 para 10%): '))


if (aumento < 0){
    console.log("Seu salário diminuiu? :(")
} else if (aumento > 0){
    console.log(`O seu novo salário será de R$${(novoSalario(salario, aumento)).toFixed(2)}.`)
    console.log(`Um aumento de R$${(novoSalario(salario, aumento) - salario).toFixed(2)}.`)    
} else {
    console.log("Tente novamente, o seu aumento não é válido.")
}