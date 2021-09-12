import { ProxyState } from "../AppState.js"
import { pokeService } from "../Services/PokeService.js"


function _drawPokemon(){
    let template = ''
    ProxyState.apipokelist.forEach(p => template += p.Template)
    document.getElementById('pokeapi-list').innerHTML = template
}

export class PokeApiController{
      constructor(){
          ProxyState.on('apipokelist', _drawPokemon)
          pokeService.getPokemonList()
          console.log('pokeapi controller loaded')
      }
      async getPokemonStats(url){
            console.log('i clicked a pokemon')
            console.log('pokemon url', url)

        //   try {
        //   await pokeService.getPokemonStats(url)  
              
        //   } catch (error) {
        //   console.error('GET_POKEMON_STATS',error)    
        //   }
      }
          
  }