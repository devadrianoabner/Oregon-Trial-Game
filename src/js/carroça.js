
class Carroça{

    constructor(){
        this._capacidade = 3
        this._nivel = 1
        this._viajantes = []
        this._velocidade = 1
        this._experiencia = 0
        this._experienciaParaProximoNivel = 100
    }
    // get experiencia(){
    //     return this._experiencia
    // }

    // set experiencia(novaExperiencia){
    //     this._experiencia += novaExperiencia
    // }

    convidarCarroça(viajante){
        if(this._viajantes.length < this._capacidade){
            this._viajantes.push(viajante)
            console.log("Passageiro adicionado")
        }else if(this._viajantes.length >= this._capacidade){
            console.log("Carroça lotada")
        }
    }
    sairDaCarroça(indice){
        if(this._viajantes.length > 0){
            this._viajantes.splice(indice, 1)
            console.log("Viajante removido") 
        }
    }
    assentosDisponiveis(){
        let assentosDisponiveis = this._capacidade - (this._viajantes.length + 1)
        console.log(`${assentosDisponiveis} é a quantidade de assentos livres`)
        return assentosDisponiveis
    }
    viajar(){

    }
    acampar(){

    }
    ganhoDeExp(expAdquirida){    
        console.log(`Sua carroça ganhou ${expAdquirida} de experiência`)      
        let expResidual = 0
        if(expAdquirida + this._experiencia >= this._experienciaParaProximoNivel){
            this.nivelUp()
            expResidual = (this._experiencia + expAdquirida) - this._experienciaParaProximoNivel    
            this._experiencia = expResidual
            expResidual = 0
            let exp =  this._experienciaParaProximoNivel * (this._nivel - (this._nivel / 10))

            this._experienciaParaProximoNivel = exp
            console.log(`${exp} de experiência para o próximo nível`)  
        }
        else if(expAdquirida + this._experiencia < this._experienciaParaProximoNivel){
            this._experiencia += expAdquirida
            console.log(`${this._experiencia - expAdquirida} de experiência para o próximo nível`)  
        }     
       
    }

    nivelUp(){
        
        this._nivel += 1
        let multiplicador = this._nivel
        this._velocidade = multiplicador * 3
        if(this._nivel % 2 ===0){
            this._capacidade += 1
            console.log(`Parabéns! Carroça atingiu o nível ${this._nivel} e sua velocidade agora é ${this._velocidade}`)
        }else {
            console.log(`Parabéns! Carroça atingiu o nível ${this._nivel}, agora ela pode comportar ${this._capacidade} viajantes, e sua velocidade agora é ${this._velocidade}`)
        }

        
    }

}


export {Carroça}