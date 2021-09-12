import { ProxyState } from "../AppState.js"
import { PokeApiList } from "../Models/PokeApiList.js"
import { PokeStats } from "../Models/PokeStats.js"

// @ts-ignore
let apipokelist = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    timeOut: 5000
})

class PokeService{

   async getPokemonStats(url){
       let res = await apipokelist.get(url)
       console.log('pokemon from pokeservice',res.data)
       ProxyState.pokeStats = new PokeStats(res.data)
        
    }

    async getPokemonList(){
        let res = await apipokelist.get('')
        console.log('pokemon list',res.data.results)
        ProxyState.apipokelist = res.data.results.map(p => new PokeApiList(p))
        console.log('proxy list of pokemon',ProxyState.apipokelist)
         
     }
}

export const pokeService =  new PokeService()