import {Viajante} from "./../Classes/viajante.js"

let equipamentos =[
    {
        nome      : "",
        vida      : 0,
        ataque    : 0,
        defesa    : 0,
        velocidade: 0,
        id        : "",
        tipo      : ""   
    },
    {
        nome      : "Espada longa",
        vida      : 0,
        ataque: 10,
        defesa: 0,
        velocidade: 0,
        id    : "0001",
        tipo  : "mao1"
    },
    {
        nome  : "Escudo de madeira",
        vida  : 0,
        ataque: 0,
        defesa: 10,
        velocidade: 0,
        id    : "0002",
        tipo  : "mao2"
    },
    {
        nome  : "Arco",
        vida  : 0,
        ataque: 20,
        defesa: 5,
        velocidade: 0,
        id    : "0003",
        tipo  : "mao1"   
    },
    {
        nome  : "Escudo de videira encantada",
        vida  : 15,
        ataque: 5,
        defesa: 25,
        velocidade: 0,
        id    : "0004",
        tipo  : "mao2"   
    },
    {
        nome  : "Anel da morte",
        vida  : -99999999999999,
        ataque: 0,
        defesa: 0,
        id    : "0005",
        tipo  : "anel" 
    },
    {
        nome  : "Anel da vida",
        vida  : +999999999999999,
        ataque: 0,
        defesa: 0,
        id    : "",
        tipo  : "anel"   
    },
    
]

export {equipamentos}