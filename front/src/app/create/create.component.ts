import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Poke } from '../models/poke';
import { FakeapiService } from '../services/fakeapi.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public addForm! : FormGroup
  public newPoke!: Poke
  constructor(private _fb : FormBuilder, private _api: FakeapiService) { }

  ngOnInit(): void {
    this.addForm = this._fb.group({
      pokeid: [null, [Validators.required]],
      pokename: [null, [Validators.required, Validators.maxLength(32)]],
      pokerate: [null, [Validators.required]]
    })
  }

  public addPoke() {
    this._api.addPoke(this.addForm)
    .subscribe(data => {console.log("subscribe", data)})
  }
}
