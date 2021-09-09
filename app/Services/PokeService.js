import { ProxyState } from "../AppState.js"
import { PokeStats } from "../Models/PokeStats.js"



class PokeService{

   async getPokemonStats(url){
       let res = await apipokelist.get(url)
       ProxyState.pokeStats = new PokeStats(res.data)
        
    }


}

export const pokeService =  new PokeService()