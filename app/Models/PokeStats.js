export class PokeStats{
    constructor(pokeData){
        this.id = pokeData.id
        this.name = pokeData.name
        this.img = pokeData.spirtes.back_default
        this.abilities = pokeData.abilities
        this.height = pokeData.height
        this.weight = pokeData.weight
        this.attack = pokeData.moves.move.name
        this.stats = pokeData.stats
    }

    get Template(){
        return /*html*/`
        <div class="card elevation-3">
            <div class="card-header">
              <h3>${this.name}</h3>
            </div>
            <div class="card-body scollable-y" style="max-height: 50vh;">
              <p>${this.readStats()}</p>
            </div>
            <div class="card-footer">
              <button class="btn btn-dark text-light" onclick=""></button>
            </div>
          </div>
        `
    }
    
    readStats(){
        let template = ''
        this.stats.forEach(s => template += `${s.stat.name} : ${s.base_stat} <br/><br/>`)
        return template
    }
}