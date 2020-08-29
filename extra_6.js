/*
Deve gerar dois números aleatórios entre 1 e 100.
Em seguida, some estes números e devolva uma string com o resultado no formato:
"a soma de [número aleatório] e [número aleatório] é XXX".
Você vai ter que pesquisar o método do JS para gerar números aleatórios, 
Math.random() e como utilizá-lo.
*/

function getRandom() {
    return Math.random();
}

n1 = parseFloat(getRandom().toFixed(2))
n2 = parseFloat(getRandom().toFixed(2))

console.log(`A soma de ${n1} e ${n2} é ${(n1+n2).toFixed(2).}`)