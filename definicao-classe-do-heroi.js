// Mapeamento de tipos para ataques
const ataquesPorTipo = {
    mago: 'magia',
    guerreiro: 'espada',
    monge: 'artes marciais',
    ninja: 'shuriken'
};

// Classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        const ataque = ataquesPorTipo[this.tipo] || 'um ataque desconhecido';
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

// Instâncias de Heroi
const herois = [
    new Heroi('Aragorn', 30, 'guerreiro'),
    new Heroi('Gandalf', 1000, 'mago'),
    new Heroi('Bruce Lee', 32, 'monge'),
    new Heroi('Hattori Hanzo', 25, 'ninja')
];

// Executa o ataque de cada herói
herois.forEach(heroi => heroi.atacar());
