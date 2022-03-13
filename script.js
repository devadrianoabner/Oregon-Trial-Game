import { Carroça }    from "./src/js/carroça.js";
import { Mercenario } from "./src/js/Classes/Mercenario.js";
import {  Bruxo     } from "./src/js/Classes/bruxo.js"

const body = document.getElementsByTagName("body")[0]

let carrocinha = new Carroça()
let bruxo = new Bruxo("Midas")
let mercenario = new Mercenario("Jorge")

body.addEventListener("click", carrocinha.menuCarroça.bind(carrocinha))



carrocinha.convidarCarroça(bruxo)
carrocinha.convidarCarroça(mercenario)

// carrocinha.menuCarroça()

console.log(body)
// console.log(bruxo)

// carrocinha.menuCarroça()

// carrocinha.selecionarPersonagem("Midas")
// mercenario.sangrar(1000)

// mercenario.pegarItem("Carne", 5)
// mercenario.usarItem("Carne", true)
// mercenario.ganhoDeExp(1000)
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











