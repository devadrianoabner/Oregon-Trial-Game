import {equipamentos} from "./../Equipamentos/equipamentos.js"
import {    itens    } from "./../Itens/itens.js"  

class Viajante{
    constructor(nome){
        this._nome                        = nome
        this._vida                        = 100
        this._ataque                      = 10
        this._defesa                      = 10
        this._velocidade                  = 1
        this._vidaMaxima                  = this._vida
        this._ataqueMaximo                = this._ataque
        this._defesaMaxima                = this._defesa
        this._velocidadeMaxima            = this._velocidade 
        this._poder                       = 0  
        this._saude                       = true
        this._fome                        = 100  
        this._statusViajante              = ""  
        this._nivel                       = 1
        this._multiplicador               = {multiplicadorVida: 0.3, MultiplicadorAtaque:0.3, multiplicadorDefesa: 0.3}
        this._experiencia                 = 0
        this._experienciaNecessaria       = 100
        this._expAtual                    = 0
        this._experienciaParaProximoNivel = 100
        this._ouro                        = 0
        this._bolsa                       = []
        this._equipamentos                = []
        this._missoes                     = []
        this._classe                      = "viajante"
        this._src                         = `../img/classes/gifs/${this._classe}.gif`
    };

    get ouro(){
        return Number(this._ouro)
    }
    set ouro(novoOuro){
        if(novoOuro === Number){
            this._ouro = novoOuro
        }
    }

    get vida(){
        return Number(this._vida) 
    };
    set vida(novaVida){
        if(novaVida < 0){
            this._vida = Number(novaVida = 0)
        }else if(novaVida > this._vidaMaxima){
            this._vida = this._vidaMaxima
        }else{
            this._vida = novaVida
        }
    };

    get ataque(){
        return Number(this._ataque) 
    }
    set ataque(novoAtaque){
        this._ataque = Number(novoAtaque)
    };

    get defesa(){
        return Number(this._defesa) 
    };
    set defesa(novaDefesa){
        this._defesa = Number(novaDefesa)
    };
    get velocidade(){
        return Number(this._velocidade) 
    };
    set velocidade(novaVelocidade){
        this._velocidade = Number(novaVelocidade)
    };

    get statusViajante(){
        return this._statusViajante = ""
    };

    set statusViajante(novoStatusViajante){
        this._statusViajante = novoStatusViajante
    };

    get fome(){
        return Number(this._fome) 
    };

    set fome(novaFome){
        if(this._fome  + novaFome > 100){
            return this._fome = 100
        }else if(this._fome + novaFome <= 0){
            return this._fome = 0
        }
    };

    //Sessão de missões         //Sessão de missões         //Sessão de missões         //Sessão de missões         //Sessão de missões         




    // Sessão de itens e usáveis      // Sessão de itens e usáveis      // Sessão de itens e usáveis      // Sessão de itens e usáveis      
    
    mostrarItens(){

    }
    
    pegarItem(nomeDoItem, unidades){

        let itemSelecionado = itens.filter( (item) =>{
            return item.nome === nomeDoItem
        })
        itemSelecionado[0].quantidade = unidades
        this._bolsa.push(itemSelecionado[0])

        console.log(`${this._nome} recebeu ${unidades} unidades de ${itemSelecionado[0].nome}`)
    };
    usarItem(nome, quantidade){
        let itemSelecionado = this._bolsa.filter( (item) =>{
            return item.nome = nome
        })

        let indiceItem = this._bolsa.findIndex( (item)=>{
            return item. nome === itemSelecionado[0].quantidade.nome
        })

        if( quantidade <= 0 || quantidade > itemSelecionado[0].quantidade || quantidade !== Number){
         
            return console.log("Você não usou o item")

        }else if(quantidade <= itemSelecionado[0].quantidade){
        
            let tempoAtivo = itemSelecionado[0].tempo * 1000 * itemSelecionado[0].quantidade
            itemSelecionado[0].quantidade -= quantidade 
            
            if(itemSelecionado[0].quantidade === 0){
                this._bolsa.splice(indiceItem, 1)
            }

            this.vida       += itemSelecionado[0].vida
            this.ataque     += itemSelecionado[0].ataque
            this.defesa     += itemSelecionado[0].defesa
            this.velocidade += itemSelecionado[0].velocidade
            this.fome       += itemSelecionado[0].fome

            console.log("Seus status foram aumentados temporariamente")
            console.log(`Vida: ${this.vida} Ataque:${this.ataque} Defesa:${this.defesa} Velocidade:${this.velocidade} Fome:${this.fome}`)
           
            setTimeout(  () =>{
            this.ataque     -= itemSelecionado[0].ataque
            this.defesa     -= itemSelecionado[0].defesa
            this.velocidade -= itemSelecionado[0].velocidade

            console.log(`Vida: Ataque:${this.ataque} Defesa:${this.defesa} Velocidade:${this.velocidade}`)
          
            }, tempoAtivo)
        }
    };

    // Sessão de equipamentos     // Sessão de equipamentos     // Sessão de equipamentos     // Sessão de equipamentos     // Sessão de equipamentos     
    ativarEquipamento(equipamento){ 
        this.vida              += equipamento.vida
        this._vidaMaxima       += equipamento.vida
        
        this.ataque            += equipamento.ataque
        this._ataqueMaximo     += equipamento.ataque
        
        this.defesa            += equipamento.defesa
        this._defesaMaxima     += equipamento.defesa

        this._velocidade       += equipamento.velocidade
        this._velocidadeMaxima += equipamento.velocidade
    };
    desativarEquipamento(equipamento){
        this.vida              -= equipamento.vida
        this._vidaMaxima       -= equipamento.vida
        
        this.ataque            -= equipamento.ataque
        this._ataqueMaximo     -= equipamento.ataque
        
        this.defesa            -= equipamento.defesa
        this._defesaMaxima     -= equipamento.defesa

        this._velocidade       += equipamento.velocidade
        this._velocidadeMaxima += equipamento.velocidade
    };
    equipar(nomeDoEquipamento){
        
        let listaEquipamentos       = equipamentos.filter( (equipamento)     =>{
            return equipamento.nome === nomeDoEquipamento             
        })

        let verificacao             = this._equipamentos.some( (equipamento) =>{
            return equipamento.tipo === listaEquipamentos[0].tipo
        })

        if(verificacao === false){
            this._equipamentos.push(listaEquipamentos[0])
            this.ativarEquipamento(listaEquipamentos[0])

            console.log(`${listaEquipamentos[0].nome} foi equipado, você recebeu ${listaEquipamentos[0].vida} de vida, ${listaEquipamentos[0].ataque} de ataque e ${listaEquipamentos[0].defesa} de defesa`)

        }else{
            this.desequipar(nomeDoEquipamento)
            this._equipamentos.push(listaEquipamentos[0])
            this.ativarEquipamento(listaEquipamentos[0])

            console.log(`${listaEquipamentos[0].nome} foi equipado, você recebeu ${listaEquipamentos[0].vida} de vida, ${listaEquipamentos[0].ataque} de ataque e ${listaEquipamentos[0].defesa} de defesa`)
        }
    };
    desequipar(nomeDoEquipamento){
        let equipamento             = this._equipamentos.findIndex( (equipamento)=>{
            return equipamento.nome === nomeDoEquipamento             
        })
       let equipamentoRemovido      = this._equipamentos.splice(equipamento,1)

       this.desativarEquipamento(equipamentoRemovido[0])

       console.log(`${equipamentoRemovido[0].nome} desequipado: menos ${equipamentoRemovido[0].vida} de vida, menos ${equipamentoRemovido[0].ataque} de ataque e menos ${equipamentoRemovido[0].defesa} de defesa`)
    };

    // Ganho de EXP e Level!     // Ganho de EXP e Level!     // Ganho de EXP e Level!     // Ganho de EXP e Level!  
    ganhoDeExp(expAdquirida){    

        console.log(`Sua ${this._nome} ganhou ${expAdquirida} de experiência`)       

        if(expAdquirida + this._expAtual >= this._experienciaNecessaria){
            this._experiencia += expAdquirida      
            this._expAtual    += expAdquirida                

            for(this._expAtual; this._expAtual    >= this._experienciaParaProximoNivel;){
                this._expAtual                    -= this._experienciaParaProximoNivel 
                this._experienciaParaProximoNivel += (40 * (this._nivel / 2))                
                this.nivelUp()              
            }

            console.log(`${this._experienciaParaProximoNivel - this._expAtual} de experiência para o próximo nível da ${this._nome}`)

            this._experienciaNecessaria = this._experienciaParaProximoNivel
        }
        else if(expAdquirida  + this._expAtual < this._experienciaNecessaria){
            this._expAtual    += expAdquirida
            this._experiencia += expAdquirida

            if(this._expAtual - this._experienciaParaProximoNivel > 0){
            console.log(`${this._expAtual - this._experienciaParaProximoNivel} de experiência para o próximo nível da ${this._nome}`)
            }else{
                console.log(`${this._experienciaParaProximoNivel - this._expAtual} de experiência para o próximo nível da ${this._nome}`) 
            }
        }            
    };
    nivelUp(){
        this._nivel             += 1
        let novaVida            = this.vida         + (this._multiplicador.multiplicadorVida   * (40 * (this._nivel / 2)) )
        let novoAtaque          = this.ataque       + (this._multiplicador.MultiplicadorAtaque * (10 * (this._nivel / 2)) )
        let novaDefesa          = this.defesa       + (this._multiplicador.multiplicadorDefesa * (10 * (this._nivel / 2)) )
        let novaVelocidade      = this.velocidade   + (this._multiplicador.multiplicadorDefesa * ( 2 * (this._nivel / 2)) )

        this.vida               = novaVida.toFixed       ()
        this._vidaMaxima        = novaVida.toFixed       ()
        this.ataque             = novoAtaque.toFixed     ()
        this._ataqueMaximo      = novoAtaque.toFixed     ()
        this.defesa             = novaDefesa.toFixed     ()
        this._defesaMaxima      = novaDefesa.toFixed     ()
        this.velocidade         = novaVelocidade.toFixed ()
        this._velocidadeMaxima  = novaVelocidade.toFixed ()
        let somaPoder           = (this._ataqueMaximo * 2) + (this._defesaMaxima * 2) + (this._vidaMaxima * 1)
        this._poder            += somaPoder

        console.log(`Parabéns! ${this._nome} atingiu o nível ${this._nivel} sua vida agora é ${this.vida}, seu ataque é ${this.ataque} e sua defesa ${this.defesa}`)       
    };

    // Alterar status do personagem     // Alterar status do personagem     // Alterar status do personagem     // Alterar status do personagem     
    morrer(){
        if(this.vida <= 0){
            console.log(`${this._nome} morreu`)
           this.statusViajante = "morto"
           this._bolsa         = []
           this._equipamentos  = []
        }
        return true
    }
    reviver(){
        this.vida = this._vidaMaxima
        this._statusViajante = ""
        console.log(this._vidaMaxima)
    }
    sangrar(valor){
        this.statusViajante = "sangrar"

        console.log(`${this._nome} está sangrando`)

        if(this._statusViajante === "sangrar"){
             let sangramento = window.setInterval( () =>{
                if(this.vida > 1){

                    this.vida -= 20
    
                    console.log(`${this._nome} perdeu 20 pontos de vida`)
    
                    console.log(`${this._nome} tem ${this.vida} pontos de vida`)

                    this.morrer()
    
                }else{
                    this.statusViajante = ""
                    clearInterval(sangramento)
                }

            }, valor);
        }
    };
    ativarFome(valor){
        
       let fome = window.setInterval( () =>{
           
            if(this.fome > 0){
                this._fome -= 10
                console.log(`${this.fome}: fome -10 `)
            }

            if(this.fome === 50){

                console.log(`A barriga ${this._nome} está roncando`)

            }else if(this.fome === 20){

                this.vida       -= (this.vida   * 0.2    )
                this.ataque     -= (this.ataque * 0.2    )
                this.defesa     -= (this.defesa * 0.2    )
                this.velocidade -= (this.velocidade * 0.2)

                console.log(`${this._nome} está com muita fome`)

            }else if(this.fome <= 0){
                this._saude      = false
                this.vida       -= (this.vida   * 0.5    )
                this.ataque     -= (this.ataque * 0.5    )
                this.defesa     -= (this.defesa * 0.5    )
                this.velocidade -= (this.velocidade * 0.5)

                console.log(`${this._nome} está doente`)
                clearInterval(fome)
            }
        },valor)
    };  
};

export {Viajante}