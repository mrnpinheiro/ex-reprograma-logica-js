function dizerOlaParaUsuario(nomeUsuario, profissaoUsuario) {
    console.log(`Olá ${nomeUsuario} - ${profissaoUsuario}`)
}

const readline = require('readline-sync')

const nome = readline.question('Qual seu nome? ')
const profissao = readline.question('Qual sua profissão? ')


dizerOlaParaUsuario(nome, profissao)