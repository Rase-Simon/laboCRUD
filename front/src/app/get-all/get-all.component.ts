import { Component, OnInit } from '@angular/core';
import { Poke } from '../models/poke';
import { FakeapiService } from '../services/fakeapi.service';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.scss']
})
export class GetAllComponent implements OnInit {

  public pokelist: Poke[] = []
  constructor(public _api: FakeapiService) { }

  ngOnInit(): void {
    this._api.getAllPoke().subscribe({
      next: (datas) =>
      {
        this.pokelist = datas
        this.pokelist.sort((a, b) => a.id - b.id)
      }
    })
  }

}
