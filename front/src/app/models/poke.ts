export class Poke {
    id: number
    name: string
    capture_rate: number

    constructor(id: number, name: string, capture_rate: number){
        this.id = id
        this.name = name
        this.capture_rate = capture_rate
    }
}
