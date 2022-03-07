
class Carroça{

    constructor(){
        this.capacidade = 3
        this.nivel = 1
        this.viajantes = []
        this.velocidade = 1

    }

    
    convidarCarroça(viajante){
        if(this.viajantes.length < this.capacidade){
            this.viajantes.push(viajante)
            console.log("Passageiro adicionado")
        }else if(this.viajantes.length >= this.capacidade){
            console.log("Carroça lotada")
        }
    }

    sairDaCarroça(indice){
        if(this.viajantes.length > 0){
            this.viajantes.splice(indice, 1)
            console.log("Viajante removido") 
        }
    }

    assentosDisponiveis(){
        let assentosDisponiveis = this.capacidade - (this.viajantes.length + 1)
        
        console.log(`${assentosDisponiveis} é a quantidade de assentos livres`)
        return assentosDisponiveis
    }

    viajar(){

    }

    acampar(){

    }

    nivelUp(){
        this.nivel += 1

        let multiplicador = this.nivel

        this.velocidade = multiplicador * 3

        if(this.nivel % 2 ===0){
            this.capacidade += 1
            console.log(`Seu nível aumentou e com isso a sua carroça pode comportar ${this.viajantes} viajantes, e sua velocidade agora é ${this.velocidade}`)
        }
    }

}






export {Carroça}