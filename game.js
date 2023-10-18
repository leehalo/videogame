var VideoGame = /** @class */ (function () {
    function VideoGame(nome, genero, numeroJogadores, plataforma, preco) {
        this.nome = nome;
        this.genero = genero;
        this.numeroJogadores = numeroJogadores;
        this.plataforma = [plataforma];
        this.preco = preco;
    }
    VideoGame.prototype.exibirDetalhes = function () {
        console.log("Detalhes do Jogo:");
        console.log("Nome: ".concat(this.nome));
        console.log("G\u00EAnero: ".concat(this.genero));
        console.log("N\u00FAmero de Jogadores: ".concat(this.numeroJogadores));
        console.log("Plataformas Compat\u00EDveis: ".concat(this.plataforma.join(', ')));
        console.log("Pre\u00E7o: $".concat(this.preco.toFixed(2)));
    };
    VideoGame.prototype.aplicarDesconto = function (percentual) {
        var desconto = (this.preco * percentual) / 100;
        this.preco -= desconto;
    };
    VideoGame.prototype.adicionarPlataforma = function (novaPlataforma) {
        this.plataforma.push(novaPlataforma);
    };
    VideoGame.prototype.estimarTempoJogo = function () {
        switch (this.genero) {
            case "Ação":
                return "Cerca de 10 horas";
            case "Aventura":
                return "Cerca de 20 horas";
            case "Esportes":
                return "Indeterminado";
            case "Estratégia":
                return "Cerca de 30 horas";
            case "suspense":
                return "40 horas";
            default:
                return "Tempo de jogo desconhecido para este gênero.";
        }
    };
    return VideoGame;
}());
// Exemplo de uso da classe VideoGame
var meuJogo = new VideoGame("Hello naighbor", "suspense", 4, "Pc", 50.0);
meuJogo.exibirDetalhes();
meuJogo.aplicarDesconto(10);
meuJogo.exibirDetalhes();
meuJogo.adicionarPlataforma("playstation");
meuJogo.exibirDetalhes();
console.log("Tempo estimado para terminar o jogo:", meuJogo.estimarTempoJogo());
