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
  public timeout: any
  public timeouttime: number = 1000

  constructor(private _api : FakeapiService) { }

  ngOnInit(): void {
  }

  public search() {
    this._api.getOnePoke(Math.floor(Math.random()*150+1))
    .subscribe({
      next: (data) =>
      {
        this.pokesauvage = data
        this.combatactif = true
        this.catchrate = this.pokesauvage.capture_rate
        this.flyrate = 50
        this.message = `Oh, un ${this.pokesauvage.name} sauvage apparait!`
      }
    })
  }


  public attraper() {
    let uppercatchlimit = 65535 * Math.sqrt(this.catchrate/510)

    let rand = Math.floor(Math.random()*65535)

    this.message = `Vous tentez d'attraper le ${this.pokesauvage.name} sauvage`

    let i = 0
    while(i<4 && rand<=uppercatchlimit)
    {
      i++
      rand = Math.random()*65535
    }

    this.timeout = setTimeout(() =>
    {
      switch(i)
      {
        case 0:
          this.message = "Oh non, le pokémon s'est libéré"
          this.timeout = setTimeout(() =>
          {this.flyingpoke()}, this.timeouttime)
          break;
        case 1:
          this.message = "Rhaaa, ça y était presque!"
          this.timeout = setTimeout(() =>
          {this.flyingpoke()}, this.timeouttime)
          break;
        case 2:
          this.message = "Zut, il est sorti!"
          this.timeout = setTimeout(() =>
          {this.flyingpoke()}, this.timeouttime)
          break;
        case 3:
          this.message = "Dommage, encore raté"
          this.timeout = setTimeout(() =>
          {this.flyingpoke()}, this.timeouttime)
          break;
        case 4:
          this.message = `Félicitations, le ${this.pokesauvage.name} sauvage est attrapé!`
          this.combatactif = false
          break;
      }
    }, this.timeouttime)
    

  }

  public appater() {
    this.flyrate*=0.9
    this.catchrate*=0.9
    this.message = `Vous lancez un appât sur le ${this.pokesauvage.name} sauvage`
    this.timeout = setTimeout(() =>
    {this.flyingpoke()}, this.timeouttime)
  }

  public caillasser() {
    this.flyrate*=1.1
    this.catchrate*=1.1
    this.message = `Vous lancez un caillou sur le ${this.pokesauvage.name} sauvage`
    this.timeout = setTimeout(() =>
    {this.flyingpoke()}, this.timeouttime)
  }

  public fuir() {
    this.combatactif = false
    this.message = "Vous avez pris la fuite..."
  }

  public flyingpoke() {
    let rand = Math.random()*255
    if(rand < this.flyrate)
    {
      this.message = `Le ${this.pokesauvage.name} sauvage s'est enfui...`
      this.combatactif = false
    }
    else
    {
      this.message = `Le ${this.pokesauvage.name} sauvage observe attentivement...`
    }

  }

}
