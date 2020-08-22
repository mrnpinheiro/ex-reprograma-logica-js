// Faça um programa que peça um valor entre zero e dez. Mostre uma msg se for inválido e continue pedindo até que o usuário informe um valor válido.

const read = require('readline-sync')

let num = read.question("Digite um numero: ")

while (num < 0 || num < 10){
    num = read.question("Digite um numero: ")
}