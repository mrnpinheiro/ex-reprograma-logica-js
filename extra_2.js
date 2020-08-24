/* 
Solicite o preço de uma mercadoria e o percentual de desconto. 
Exiba o valor do desconto e o preço a pagar.
*/

function precoPagar(preco, desconto) {
    return preco * (1 - desconto)
}

const readline = require('readline-sync')

const preco = parseFloat(readline.question('Digite o preco total da mercadoria: '))
const desconto = parseFloat(readline.question('Digite a % de desconto (Ex: 0.10 para 10%): '))


if (desconto < 0){
    console.log("O valor do produto aumentou? :(")
} else if (desconto > 0){
    console.log(`O preço a pagar será de R$${(precoPagar(preco, desconto)).toFixed(2)}.`)
    console.log(`Um desconto de R$${(preco - precoPagar(preco, desconto)).toFixed(2)}.`)    
} else {
    console.log("Tente novamente, o seu desconto não é válido.")
}