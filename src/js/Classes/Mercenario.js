import {Viajante} from "./../Classes/viajante.js"
import {equipamentos} from "./../Equipamentos/equipamentos.js"

class Mercenario extends Viajante{
    constructor(nome){
        super(nome)
        this._vida             = 150
        this._ataque           = 50
        this._defesa           = 10
        this._velocidade       = 1
        this._vidaMaxima       = this._vida
        this._ataqueMaximo     = this._ataque
        this._defesaMaxima     = this._defesa
        this._velocidadeMaxima = this._velocidade  
        this._multiplicador    = {multiplicadorVida: 0.75, MultiplicadorAtaque:0.50, multiplicadorDefesa: 0.30}
    }

    vaiMeDarCabeçada(alvo){
        let dano = alvo.defesa + alvo.vida - this.ataque;
        if(dano <= 0){
            console.log(dano + " dano causado!")
            return dano
        }
        else{
            console.log(dano + " dano causado!")
            return dano
        }
    };
    esquiva(){};

    critico() {
        this.ataque = Math.floor(Math.random() * 15);
     
    }

    sangramento(){};

};

export {Mercenario}