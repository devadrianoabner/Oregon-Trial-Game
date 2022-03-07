class Mercenario{
    constructor(nome){
        this.nome   = nome;
        this.vida   = 250;
        this.saude  = true;
        this.ataque = 15;
        this.defesa = 10;
        this.nivel  = 1;
        this.comida = 1;
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