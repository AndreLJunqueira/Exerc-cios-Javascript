var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12 && hora > 4) {
    console.log(`Bom dia!`)
} else if (hora >= 12 && hora < 18) {
    console.log(`Boa tarde!`)
} else if (hora >= 18 && hora <= 24) {
    console.log(`Boa noite!`)
} else if (hora >= 1 && hora <= 4) {
    console.log(`Boa madrugada!`)
} else {
    console.log(`ERRO! O dia tem apenas 24 horas`)
}