export class Poke {
    id: number
    name: string
    capture_rate: number
    sprite: string

    constructor(id: number, name: string, capture_rate: number){
        this.id = id
        this.name = name
        this.capture_rate = capture_rate
        this.sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+this.id+".png"
    }
}
