import {equipamentos} from "./../Equipamentos/equipamentos.js"

class Viajante{
    constructor(nome){
        this._nome                        = nome
        this._vida                        = 100
        this._ataque                      = 10
        this._defesa                      = 10
        this._saude                       = true
        this._nivel                       = 1
        this._multiplicador               = {multiplicadorVida: 0.3, MultiplicadorAtaque:0.3, multiplicadorDefesa: 0.3}
        this._comida                      = 1
        this._experiencia                 = 0
        this._experienciaNecessaria       = 100
        this._expAtual                    = 0
        this._experienciaParaProximoNivel = 100
        this._bolsa                       = []
        this._equipamentos                = []
    }

    get vida(){
        return Number(this._vida) 
    }
    set vida(novaVida){
        this._vida = Number(novaVida)
    }

    get ataque(){
        return Number(this._ataque) 
    }
    set ataque(novoAtaque){
        this._ataque = Number(novoAtaque)
    }

    get defesa(){
        return Number(this._defesa) 
    }
    set defesa(novaDefesa){
        this._defesa = Number(novaDefesa)
    }

    ativarEquipamento(equipamento){ 
        this.vida   += equipamento.vida
        this.ataque += equipamento.ataque
        this.defesa += equipamento.defesa
    }
    desativarEquipamento(equipamento){
        this.vida   -= equipamento.vida
        this.ataque -= equipamento.ataque
        this.defesa -= equipamento.defesa
    }
    equipar(nomeDoEquipamento){
        
        let listaEquipamentos = equipamentos.filter( (equipamento)=>{
            return equipamento.nome === nomeDoEquipamento             
        })

        let verificacao = this._equipamentos.some( (equipamento) =>{
            return equipamento.tipo === listaEquipamentos[0].tipo
        })

        if(verificacao === false){
            this._equipamentos.push(listaEquipamentos[0])
            this.ativarEquipamento(listaEquipamentos[0])
            console.log(`${listaEquipamentos[0].nome} foi equipado, sua vida foi aumentada em ${listaEquipamentos[0].vida} seu  ataque foi aumentado em ${listaEquipamentos[0].ataque} e sua defesa foi aumentada em ${listaEquipamentos[0].defesa}`)
        }else{
            this.desequipar(nomeDoEquipamento)
            this._equipamentos.push(listaEquipamentos[0])
            this.ativarEquipamento(listaEquipamentos[0])
            console.log(`${listaEquipamentos[0].nome} foi equipado, sua vida foi aumentada em ${listaEquipamentos[0].vida} seu  ataque foi aumentado em ${listaEquipamentos[0].ataque} e sua defesa foi aumentada em ${listaEquipamentos[0].defesa}`)
        }
    }

    desequipar(nomeDoEquipamento){
        let equipamento = this._equipamentos.findIndex( (equipamento)=>{
            return equipamento.nome === nomeDoEquipamento             
        })
       let equipamentoRemovido = this._equipamentos.splice(equipamento,1)

       this.desativarEquipamento(equipamentoRemovido[0])

       console.log(`${equipamentoRemovido[0].nome} desequipado: menos ${equipamentoRemovido[0].vida} de vida, menos ${equipamentoRemovido[0].ataque} de ataque e menos ${equipamentoRemovido[0].defesa} de defesa`)
    }

    ganhoDeExp(expAdquirida){    

        console.log(`Sua ${this._nome} ganhou ${expAdquirida} de experiência`)       

        if(expAdquirida + this._expAtual >= this._experienciaNecessaria){
            this._experiencia += expAdquirida      
            this._expAtual    += expAdquirida                

            for(this._expAtual; this._expAtual >= this._experienciaParaProximoNivel;){
                this._expAtual                    -= this._experienciaParaProximoNivel 
                this._experienciaParaProximoNivel += (40 * (this._nivel / 2))                
                this.nivelUp()              
            }

            console.log(`${this._experienciaParaProximoNivel - this._expAtual} de experiência para o próximo nível da ${this._nome}`)

            this._experienciaNecessaria = this._experienciaParaProximoNivel
        }
        else if(expAdquirida + this._expAtual < this._experienciaNecessaria){
            this._expAtual    += expAdquirida
            this._experiencia += expAdquirida

            if(this._expAtual - this._experienciaParaProximoNivel > 0){
            console.log(`${this._expAtual - this._experienciaParaProximoNivel} de experiência para o próximo nível da ${this._nome}`)
            }else{
                console.log(`${this._experienciaParaProximoNivel - this._expAtual} de experiência para o próximo nível da ${this._nome}`) 
            }
        }            
    }
    nivelUp(){
        this._nivel   += 1
        let novaVida   = this.vida   + (this._multiplicador.multiplicadorVida * this.vida    )
        let novoAtaque = this.ataque + (this._multiplicador.MultiplicadorAtaque * this.ataque  )
        let novaDefesa = this.defesa + (this._multiplicador.multiplicadorDefesa * this.defesa  )

        this.vida    = novaVida.toFixed  ()
        this.ataque  = novoAtaque.toFixed()
        this.defesa  = novaDefesa.toFixed()
        console.log(`Parabéns! ${this._nome} atingiu o nível ${this._nivel} sua vida agora é ${this.vida}, seu ataque é ${this.ataque} e sua defesa ${this.defesa}`)       
    }
};

export {Viajante}