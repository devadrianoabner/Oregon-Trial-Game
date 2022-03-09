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
    }

    get vida(){
        return Number(this._vida) 
    }
    set vida(novaVida){
        this._vida = novaVida
    }

    get ataque(){
        return Number(this._ataque) 
    }
    set ataque(novoAtaque){
        this._ataque = novoAtaque
    }

    get defesa(){
        return Number(this._defesa) 
    }
    set defesa(novaDefesa){
        this._defesa = novaDefesa
    }

    // get multiplicador(){
    //     return this._multiplicador
    // }
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
        this._nivel  += 1
        let novaVida   = this.vida   + (this._multiplicador.multiplicadorVida * this.vida    )
        let novoAtaque = this.ataque + (this._multiplicador.MultiplicadorAtaque * this.ataque  )
        let novaDefesa = this.defesa + (this._multiplicador.multiplicadorDefesa * this.defesa  )

        this.vida    = novaVida.toFixed()
        this._ataque = novoAtaque.toFixed()
        this._defesa = novaDefesa.toFixed()
        console.log(`Parabéns! ${this._nome} atingiu o nível ${this._nivel} sua vida agora é ${this.vida}, seu ataque é ${this.ataque} e sua defesa ${this.defesa}`)       
    }

};

export {Viajante}