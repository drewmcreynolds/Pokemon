export class PokeApiList {
    constructor(pokeData){
        this.name = pokeData.name
        this.url = pokeData.url
    }
    get Template(){
        return /*html*/`
        <li class="list-group-item py-3 selectable" onclick="app.pokeApiController.getPokemonStats('${this.url}')">${this.name}</li>
        `
    }
}