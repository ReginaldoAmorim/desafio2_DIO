let vitorias = 50

let derrotas = 15

let resultado = calculo (vitorias, derrotas)

console.log("O Herói tem de saldo de vitórias de " + resultado.saldo + " e está no nível " + resultado.nivel)

function calculo (vitorias, derrotas){

let saldoVitoria = (vitorias - derrotas)

let nivel

if (vitorias < 10) {
    nivel = "Ferro";
} else if (vitorias <= 20) {
    nivel = "Bronze";
} else if (vitorias <= 50) {
    nivel = "Prata";
} else if (vitorias <= 80) {
    nivel = "Ouro";
} else if (vitorias <= 90) {
    nivel = "Diamante";
} else if (vitorias <= 100) {
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}

return {saldo: saldoVitoria, nivel: nivel}

}

