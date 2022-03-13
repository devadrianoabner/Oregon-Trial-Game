import { Carroça }    from "./src/js/carroça.js";
import { Mercenario } from "./src/js/Classes/Mercenario.js";
import {  Bruxo     } from "./src/js/Classes/bruxo.js"

const body = document.querySelector("body")

let carrocinha = new Carroça()
let midas = new Bruxo("Midas")
let jemeria = new Bruxo("Jeremia")

let jorge = new Mercenario("Jorge")

body.addEventListener("click", carrocinha.selecionarMenu.bind(carrocinha))



carrocinha.convidarCarroça(midas)
carrocinha.convidarCarroça(jemeria)
carrocinha.convidarCarroça(jorge)


// carrocinha.menuCarroça()
// console.log(bruxo)
// carrocinha.menuCarroça()
// carrocinha.selecionarPersonagem("Midas")
// midas.sangrar(1000)

// midas.ganhoDeExp(1000)
// carroçinha.ganhoDeExp(100)
// carroçinha.ganhoDeExp(100)
// carroçinha.ganhoDeExp(100)
// carroçinha.ganhoDeExp(100)
// carroçinha.ganhoDeExp(100)
// carroçinha.ganhoDeExp(100)
// carroçinha.ganhoDeExp(100)
// carroçinha.ganhoDeExp(100)
// mercenario.equipar("Arco")
// mercenario.equipar("Escudo de videira encantada")
// mercenario.equipar("Escudo de madeira")
// mercenario.equipar("Espada longa")
// mercenario.desequipar("Arco")
// mercenario.equipar("Anel da morte")
// mercenario.desequipar("Arco")
// mercenario.morrer()
// mercenario.equipar("Espada longa")
// mercenario.ativarEquipamentos()
// mercenario.ativarFome()











