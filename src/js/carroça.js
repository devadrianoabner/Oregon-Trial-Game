
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
        this._ouro                        = 0
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
        this._nivel      += 1
        let multiplicador = this._nivel
        this._velocidade  = multiplicador * 3
        if(this._nivel % 2 ===0){
            this._capacidade += 1
           
            console.log(`Parabéns! ${this._nome} atingiu o nível ${this._nivel} e sua velocidade agora é ${this._velocidade}`)

        }else{
            
            console.log(`Parabéns! ${this._nome} atingiu o nível ${this._nivel}, agora ela pode comportar ${this._capacidade} viajantes, e sua velocidade agora é ${this._velocidade}`)

        }    
    }

    //Abrir menús
    selecionarMenu(event){
        let menu = document.getElementById("menuLateral")
        menu.innerHTML = ""

        if(event.target.id === "carro"){
            this.menuCarroça(menu)
        }
        else if(event.target.className === "iconeClasse"){
            this.selecionarPersonagem(event.target.id)

        }

    }

    // Cria o menú da carroça
    menuCarroça(menu){
    
        let aside2 = document.createElement("aside")

            if(aside2.className === "ativarDisplay"){
                aside2.classList.remove("ativarDisplay")
            }

            let div = document.createElement("div")
            aside2.id = "informaçoes"
            aside2.classList.add("ativarDisplay")
            div.id = "footerInfo"
       
            aside2.innerHTML = `
                <p id="fechar" >${this._nome} (fechar)</p>
                <ul>
                    <li>Nível: ${this._nivel}</li>
                    <li> Experiencia:${this._expAtual}/${this._experienciaParaProximoNivel}</li>
                    <li class="barra barraDeExp"> 
                        <p>.</p> 
                    </li>
                    <li>Velocidade: ${this._velocidade }</li>
                    <li> Ouro: ${this._ouro}</li>
                </ul>      
            `
            aside2.appendChild(div)

            for(let i = 0; i< this._viajantes.length; i++){
                let img = document.createElement("img")
                img.src = `./src/img/classes/icon/${this._viajantes[i]._classe}.icon.png`
                img.alt = `${this._nome}`
                img.classList.add("iconeClasse")
                img.id = `${this._viajantes[i]._nome}`

                div.appendChild(img)
            }

            menu.appendChild(aside2)   
    
        return aside2
    };

    //Após selecionar imagem, o id vem para essa função
    selecionarPersonagem(nomeDoPersonagem){
       let personagemSelecionado = this._viajantes.filter((personagem) =>{
        return  nomeDoPersonagem === personagem._nome
       })

       this.mostrarPersonagem(personagemSelecionado[0])

       console.log(personagemSelecionado[0])
       
    }
    //Cria o card do personagem no HTML
    mostrarPersonagem(personagem){
        //criando elementos
        let aside = document.createElement("aside")

        let menu = document.getElementById("menuLateral")

        let liVida = document.createElement("li")
        let liFome = document.createElement("li")
        
        let pVida = document.createElement("p")
        let pFome = document.createElement("p")
        // let pExp = document.createElement("p")
        
        //Adicionando classes
        liVida.classList.add("barra")
        liVida.classList.add("barraDeVida")
        
        liFome.classList.add("barra")
        liFome.classList.add("barraDeFome")
        
       
        //Adicionando texto
        let vidaPorcentagem = (personagem.vida * 100 ) / personagem._vidaMaxima
        let Fomeporcentagem = personagem.fome


        pVida.style = `width: ${vidaPorcentagem}%;`
        pFome.style = `width: ${Fomeporcentagem}%;`
        

        pVida.innerText = `${personagem.vida}/${personagem._vidaMaxima}`
        pFome.innerText = `${personagem.fome}`


        aside.id = "informaçoes"
 
        aside.innerHTML = `<p id="fechar" >Status (fechar)</p>
        <ul id ="novaUl">
            <li>Nível: ${personagem._nivel}</li>
            <li>Poder: ${personagem._poder}</li>
            <li></li>
            <li class="barra barraDeFome"> 
            <p style = width: ${vidaPorcentagem}%; >.</p> 
            </li> 
            <li>Fome: ${personagem._fome}</li>
            <li class="barra barraDeFome"> 
                <p id>.</p> 
            </li> 
            <li>Ataque: ${personagem.ataque}</li>
            <li>Defesa: ${personagem.defesa }</li>
            <li>Velocidade: ${personagem._velocidade }</li>
            <li>Saúde: ${personagem._saude}</li>
            <li>Experiencia:${personagem._expAtual}/${personagem._experienciaParaProximoNivel}</li>
            <li class="barra barraDeExp"> 
                <p>.</p> 
            </li>
            <li>Status: ${personagem._statusViajante}</li>
            <li>Ouro: ${personagem._ouro}</li>
            
        </ul>
 
        <div>
            <p>${personagem._nome}: ${personagem._classe}</p>
            <img  id="classeSelecionada" src="./src/img/classes/gifs/${personagem._classe}.gif" alt="${personagem._classe}">
        </div>`

        aside.appendChild(liVida)
        aside.appendChild(liFome)
        liVida.appendChild(pVida)
        liFome.appendChild(pFome)

        menu.appendChild(aside)
        
        return aside
    }
}
export {Carroça}
