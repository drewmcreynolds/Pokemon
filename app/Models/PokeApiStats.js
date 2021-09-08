export class PokeApiStats{
    constructor(pokeData){
        this.id = pokeData.id
        this.name = pokeData.name
        this.spirtes = pokeData.spirtes.back_default
        this.hp = pokeData.base_stat
        this.height = pokeData.height
        this.weight = pokeData.weight
        this.attack = pokeData.moves.move.name
    }
}