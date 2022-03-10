class Monstro {
    constructor(nome, nivel){
        this._nome          = nome
        this._vida          = 100
        this._ataque        = 10
        this._defesa        = 10
        this._multiplicador = {multiplicadorVida: 0.3, MultiplicadorAtaque:0.3, multiplicadorDefesa: 0.3}
        this._nivel         = nivel
        this._itens         = []
    }
}