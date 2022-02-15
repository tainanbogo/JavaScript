/* let dataAtual = new Date()
let hora = dataAtual.getHours()

console.log(hora) */

var formatarMensagem = function (textoEntrada) {
    if (textoEntrada == undefined) {
        return '...';
    } else {
        let data = new Date()
        let hora = data.getHours()
        let min = data.getMinutes()
        let seg = data.getSeconds()

        let msg_formatada = `${hora} : ${min} : ${seg} -> ${textoEntrada}`

        return msg_formatada
    }
}


console.log(formatarMensagem('Um texto qualquer'))

console.log(formatarMensagem())

