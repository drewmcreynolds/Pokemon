import { ProxyState } from "../AppState.js";

function _drawPokeStats(){
    console.log('draw poke stats', ProxyState.pokeStats)
    document.getElementById('poke-stats').innerHTML = ProxyState.pokeStats.Template
}

export class PokeStatsController{
    constructor(){
        ProxyState.on('pokeStats', _drawPokeStats())
    }
}