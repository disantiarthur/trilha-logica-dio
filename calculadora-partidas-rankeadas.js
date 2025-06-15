// Função para calcular o saldo de vitórias
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função para determinar o nível com base no saldo
function determinarNivel(saldo) {
    if (saldo < 10) return "Ferro";
    if (saldo <= 20) return "Bronze";
    if (saldo <= 50) return "Prata";
    if (saldo <= 80) return "Ouro";
    if (saldo <= 90) return "Diamante";
    if (saldo <= 100) return "Lendário";
    return "Imortal 😈";
}

// Função principal
function nivelRanqueadas(vitorias, derrotas) {
    const saldo = calcularSaldo(vitorias, derrotas);
    const nivel = determinarNivel(saldo);
    return `O Herói tem um saldo de ${saldo} e está no nível de ${nivel}!`;
}

// Exemplo de uso
const vitorias = 140;
const derrotas = 20;
const resultado = nivelRanqueadas(vitorias, derrotas);
console.log(resultado);
