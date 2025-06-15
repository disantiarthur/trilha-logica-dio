// Lista de heróis com nome e XP
const herois = [
    { nome: "Capitão América", xp: 3950 },
    { nome: "Homem de Ferro", xp: 5030 },
    { nome: "Thor", xp: 6000 },
    { nome: "Hulk", xp: 7500 },
    { nome: "Viúva Negra", xp: 9999 },
    { nome: "Doutor Estranho", xp: 1000000 }
];

// Função para determinar o nível com base no XP
function obterNivel(xp) {
    if (xp < 1000) return "Ferro";
    if (xp <= 2000) return "Bronze";
    if (xp <= 5000) return "Prata";
    if (xp <= 7000) return "Ouro";
    if (xp <= 8000) return "Platina";
    if (xp <= 9000) return "Ascendente";
    if (xp <= 10000) return "Imortal";
    return "Radiante";
}

// Laço para exibir o nível de cada herói
for (const heroi of herois) {
    const nivel = obterNivel(heroi.xp);
    console.log(`O Herói de nome ${heroi.nome} está no nível ${nivel}`);
}
