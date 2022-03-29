import { Component, OnInit } from '@angular/core';
import { Poke } from '../models/poke';
import { FakeapiService } from '../services/fakeapi.service';

@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.scss']
})
export class GetDetailsComponent implements OnInit {

  public pokeid: number = 0
  public pokedetails: Poke = new Poke(0, "", 0)
  public detailsgot: boolean = false
  constructor(public _api: FakeapiService) { }

  ngOnInit(): void {
  }

  public getOnePoke() {
    this._api.getOnePoke(this.pokeid)
    .subscribe({
      next : (data) =>
      {
        this.pokedetails = data
        this.detailsgot = true
      }
    
    }
    )
  }

}
