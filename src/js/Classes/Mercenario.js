import {Viajante} from "./../Classes/viajante.js"
import {equipamentos} from "./../Equipamentos/equipamentos.js"

class Mercenario extends Viajante{
    constructor(nome){
        super(nome)
        this._vida                        = 100
        this._ataque                      = 15
        this._defesa                      = 12
        this._multiplicador               = {multiplicadorVida: 0.3, MultiplicadorAtaque:0.45, multiplicadorDefesa: 0.15}
        this._equipamentos                = []
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