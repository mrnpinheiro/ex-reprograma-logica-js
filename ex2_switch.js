/*
Programa vai receber mês do ano e vai indicar feriado
*/

const readline = require('readline-sync')

const mes = readline.question('Qual mês você deseja ver os feriados? ')
const mesFormatado = mes.toLocaleLowerCase()

switch(mesFormatado) {
    case "janeiro":
        console.log("FELIZ ANO NOVO!")
        break;
    case "fevereiro":
        console.log("Já é carnaval?")
        break;
    case "março":
        console.log("Dia das mulheres <3")
        break;
    case "abril":
        console.log("Páscoa!")
        break;
    case "maio":
        console.log("Dia das mães.")
        break;
    case "junho":
        console.log("Mês junino e dia dos namorados!")
        break;
    case "julho":
        console.log("FÉRIAS!")
        break;
    case "agosto":
        console.log("cry")
        break;
    case "setembro":
        console.log("Mês da independência!")
        break;
    case "outubro":
        console.log("Dia das crianças!")
        break;
    case "novembro":
        console.log("Consciência Negra!")
        break;
    case "dezembro":
        console.log("HOHOHO FELIZ NATAL! E meu aniversário.")
        break;

    default:
        console.log("Não achamos a agenda.")
}