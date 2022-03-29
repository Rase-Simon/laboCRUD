import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FakeapiService } from '../services/fakeapi.service';

@Component({
  selector: 'app-create',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  public updateForm! : FormGroup
  constructor(private _fb : FormBuilder, private _api: FakeapiService) { }

  ngOnInit(): void {
    this.updateForm = this._fb.group({
      pokeid: [null, [Validators.required]],
      pokename: [null, [Validators.required, Validators.maxLength(32)]],
      pokerate: [null, [Validators.required]]
    })
  }
 
  public updatePoke() {
    /*
    this._api.updatePoke(this.updateForm)
    .subscribe(data => {console.log("subscribe", data)})
    */
  }
}
