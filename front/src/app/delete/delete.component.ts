import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Poke } from '../models/poke';
import { FakeapiService } from '../services/fakeapi.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  public poke_id: number = 0
  public pokedetails: Poke = new Poke(0, "", 0)
  public detailsgot: boolean = false

  constructor(private _api: FakeapiService) { }

  ngOnInit(): void {
  }

   
  public getOnePoke() {
    this._api.getOnePoke(this.poke_id)
    .subscribe({
      next : (data) =>
      {
        this.pokedetails = data
        this.detailsgot = true
      }
    })
  }

  public deletePoke() {
    console.log("delete")
    this._api.deletePoke(this.poke_id).subscribe()
  }

}
