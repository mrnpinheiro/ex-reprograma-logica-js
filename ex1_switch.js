const dia = "sexta"
const diaFormatada = dia.toLocaleLowerCase()

switch(diaFormatada) {
    case "segunda":
        console.log("Você tem uma reunião às 10h.")
        break;
    case "terça":
        console.log("Você tem circo às 13h.")
        break;
    case "sexta":
        console.log("SEXTOU!")
        break;
    default:
        console.log("Não achamos a agenda.")
}