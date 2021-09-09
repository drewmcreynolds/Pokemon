export class SandboxList{
    constructor(pokeData){
        this.id = pokeData.id
        this.name = pokeData.name
        this.img = pokeData.img
        this.abilities = pokeData.abilities
        this.height = pokeData.height
        this.weight = pokeData.weight
        this.user = pokeData.user
        this.checked = pokeData.checked
    }

    get Template(){
        return /*html*/`
        <li class="list-group-item py-3">
            <input type="checkbox" ${this.checked ? 'checked' : ''} onclick="">
            <span class=" ms-2">${this.name}</span>
        </li>
        `
    }
}