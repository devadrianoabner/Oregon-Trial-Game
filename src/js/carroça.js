
class Carroça{

    constructor(){
        this._nome                        = "Carroça"
        this._capacidade                  = 3
        this._nivel                       = 1
        this._viajantes                   = []
        this._velocidade                  = 1
        this._experiencia                 = 0
        this._experienciaNecessaria       = 100
        this._expAtual                    = 0
        this._experienciaParaProximoNivel = 100
    }
    convidarCarroça(viajante){
        if(this._viajantes.length < this._capacidade){
            this._viajantes.push(viajante)
            console.log("Passageiro adicionado") 

        }else if(this._viajantes.length >= this._capacidade){

            console.log(`${this._nome}Lotada`)
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
        console.log(`Sua ${this._nome} ganhou ${expAdquirida} de experiência`)        
        if(expAdquirida + this._expAtual >= this._experienciaNecessaria){
            this._experiencia += expAdquirida      
            this._expAtual += expAdquirida                       
            for(this._expAtual; this._expAtual >= this._experienciaParaProximoNivel;){
                this._expAtual -= this._experienciaParaProximoNivel 
                this._experienciaParaProximoNivel += (40 * (this._nivel / 2))                
                this.nivelUp()              
            }
            console.log(`${this._experienciaParaProximoNivel - this._expAtual} de experiência para o próximo nível da ${this._nome}`)
            this._experienciaNecessaria = this._experienciaParaProximoNivel
        }
        else if(expAdquirida + this._expAtual < this._experienciaNecessaria){
            this._expAtual += expAdquirida
            this._experiencia += expAdquirida
            if(this._expAtual - this._experienciaParaProximoNivel > 0){
            console.log(`${this._expAtual - this._experienciaParaProximoNivel} de experiência para o próximo nível da ${this._nome}`)
            }else{
                console.log(`${this._experienciaParaProximoNivel - this._expAtual} de experiência para o próximo nível da ${this._nome}`) 
            }
        }            
    }
    nivelUp(){
        this._nivel += 1
        let multiplicador = this._nivel
        this._velocidade = multiplicador * 3
        if(this._nivel % 2 ===0){
            this._capacidade += 1
            console.log(`Parabéns! ${this._nome} atingiu o nível ${this._nivel} e sua velocidade agora é ${this._velocidade}`)
        }else{
            console.log(`Parabéns! ${this._nome} atingiu o nível ${this._nivel}, agora ela pode comportar ${this._capacidade} viajantes, e sua velocidade agora é ${this._velocidade}`)
        }    
    }
}
export {Carroça}
