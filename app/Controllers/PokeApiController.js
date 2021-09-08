import { ProxyState } from "../AppState.js"
import { pokeService } from "../Services/PokeService.js"


function _drawPokemon(){
    let template = ''
    ProxyState.apipoke.forEach(p => template += p.Template)
}

export class PokeApiController{
      constructor(){
          console.log("this the poke api controller")

          pokeService.getPokemon()
      }
  }