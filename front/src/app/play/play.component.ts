import { Component, OnInit } from '@angular/core';
import { Poke } from '../models/poke';
import { FakeapiService } from '../services/fakeapi.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  public pokesauvage : Poke = new Poke(0, "", 0)
  public combatactif : boolean = false
  public catchrate!: number
  public flyrate!: number
  public message: string = "Aucun pokémon à l'horizon"

  constructor(private _api : FakeapiService) { }

  ngOnInit(): void {
  }

  public search() {
    this._api.getOnePoke(Math.floor(Math.random()*35+1))
    .subscribe({
      next: (data) =>
      {
        this.pokesauvage = data
        this.combatactif = true
        this.catchrate = this.pokesauvage.capture_rate
        this.flyrate = 125
        this.message = `Oh, un ${this.pokesauvage.name} sauvage apparait!`
      }
    })
  }


  public attraper() {
    let uppercatchlimit = 65535 * Math.sqrt(this.catchrate/510)

    let rand = Math.floor(Math.random()*65535)

    let i = 0
    while(i<4 && rand<=uppercatchlimit)
    {
      i++
      rand = Math.random()*65535
    }

    switch(i)
    {
      case 0:
        this.message = "Oh non, le pokémon s'est libéré"
        break;
      case 1:
        this.message = "Rhaaa, ça y était presque!"
        break;
      case 2:
        this.message = "Zut, il est sorti!"
        break;
      case 3:
        this.message = "Dommage, encore raté"
        break;
      case 4:
        this.message = `Félicitations, le ${this.pokesauvage.name} sauvage est attrapé!`
        this.combatactif = false
        break;
    }

  }

  public appater() {
    this.flyrate*=0.8
    this.catchrate*=0.8
    this.flyingpoke()
  }

  public caillasser() {
    this.flyrate*=1.2
    this.catchrate*=1.2
    this.flyingpoke()
  }

  public fuir() {
    this.combatactif = false
    this.message = "Vous avez pris la fuite..."
  }

  public flyingpoke() {
    let rand = Math.random()*255
    if(rand > this.flyrate)
    {
      this.message = `Le ${this.pokesauvage.name} sauvage s'est enfui...`
      this.combatactif = false
    }
  }

}
