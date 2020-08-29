/*
Crie uma função que receba um número inteiro e imprima os números no console de 1 ao número. 
Porém, para todos os números que forem múltiplos de 3, imprima na tela "banana" ao invés do número; 
para os números múltiplos de 5, imprima "biscoito". Para números múltiplos de 3 e 5, 
imprima "biscoito de banana". 
Exemplo, recebendo 15 o resultado será 1 2 banana 4 biscoito banana 7 8 banana biscoito 11 banana 13 14 biscoito de banana
*/

const readline = require('readline-sync')
const num = parseFloat(readline.question('Digite um numero: '))

for (let contador = 1; contador <= num; contador++){
    if (contador % 3 == 0 && contador % 5 ==0){
        console.log("biscoito de banana")
    } else if(contador % 3 == 0){
        console.log("banana")
    } else if(contador % 5 == 0){
        console.log("biscoito")
    } else {
        console.log(contador)
    }
}