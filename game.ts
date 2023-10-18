class VideoGame {
    nome: string;
    genero: string;
    numeroJogadores: number;
    plataforma: string[];
    preco: number;

    constructor(nome: string, genero: string, numeroJogadores: number, plataforma: string, preco: number) {
        this.nome = nome;
        this.genero = genero;
        this.numeroJogadores = numeroJogadores;
        this.plataforma = [plataforma]; 
        this.preco = preco;
    }

    exibirDetalhes(): void {
        console.log("Detalhes do Jogo:");
        console.log(`Nome: ${this.nome}`);
        console.log(`Gênero: ${this.genero}`);
        console.log(`Número de Jogadores: ${this.numeroJogadores}`);
        console.log(`Plataformas Compatíveis: ${this.plataforma.join(', ')}`);
        console.log(`Preço: $${this.preco.toFixed(2)}`);
    }

    aplicarDesconto(percentual: number): void {
        const desconto = (this.preco * percentual) / 100;
        this.preco -= desconto;
    }

    adicionarPlataforma(novaPlataforma: string): void {
        this.plataforma.push(novaPlataforma);
    }

    estimarTempoJogo(): string {
        switch (this.genero) {
            case "Ação":
                return "Cerca de 10 horas";
            case "Aventura":
                return "Cerca de 20 horas";
            case "Esportes":
                return "Indeterminado";
            case "Estratégia":
                return "Cerca de 30 horas";
            case"suspense":
                return"40 horas"
            default:
                return "Tempo de jogo desconhecido para este gênero.";
        }
    }
}

// Exemplo de uso da classe VideoGame
const meuJogo = new VideoGame("Hello naighbor", "suspense", 4, "Pc", 50.0);
meuJogo.exibirDetalhes();
meuJogo.aplicarDesconto(10);
meuJogo.exibirDetalhes();
meuJogo.adicionarPlataforma("playstation");
meuJogo.exibirDetalhes();
console.log("Tempo estimado para terminar o jogo:", meuJogo.estimarTempoJogo());


