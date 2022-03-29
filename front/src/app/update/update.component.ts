import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Poke } from '../models/poke';
import { FakeapiService } from '../services/fakeapi.service';

@Component({
  selector: 'app-create',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  
  public poke_id: number = 0
  public pokedetails: Poke = new Poke(0, "", 0)
  public detailsgot: boolean = false
  public updateForm! : FormGroup

  constructor(private _fb : FormBuilder, private _api: FakeapiService) { }

  ngOnInit(): void {
    this.updateForm = this._fb.group({
      pokename: [null, [Validators.required, Validators.maxLength(32)]],
      pokerate: [null, [Validators.required]]
    })
  }
 
  public getOnePoke() {
    this._api.getOnePoke(this.poke_id)
    .subscribe({
      next : (data) =>
      {
        this.pokedetails = data
        this.detailsgot = true
        this.updateForm.setValue({"pokename": this.pokedetails.name, "pokerate": this.pokedetails.capture_rate})
      }
    })
  }

  public updatePoke() {
    this._api.updatePoke(this.pokedetails.id, this.updateForm)
    .subscribe()
  }
}
