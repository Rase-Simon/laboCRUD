import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Poke } from '../models/poke';

@Injectable({
  providedIn: 'root'
})
export class FakeapiService {

  public apiUrl: string = "http://localhost:3000/"

  constructor(public _http : HttpClient) { }

  getAllPoke(): Observable<Poke[]> {
    return this._http.get<Poke[]>(this.apiUrl+'pokemons')
  }

  addPoke(newPokeForm: FormGroup): Observable<any> {
    let newPoke : Poke =
    {
      id: newPokeForm.get('pokeid')?.value,
      name: newPokeForm.get('pokename')?.value,
      capture_rate: newPokeForm.get('pokerate')?.value
    }
    
    const headers = { 'content-type': 'application/json'}  

    return this._http.post(this.apiUrl+'pokemons', JSON.stringify(newPoke), {'headers': headers})
  }
  
  /*
  updatePoke(newPokeForm: FormGroup): Observable<any> {
    console.log("addPoke service")
    let updatedPoke : Poke =
    {
      id: newPokeForm.get('pokeid')?.value,
      name: newPokeForm.get('pokename')?.value,
      capture_rate: newPokeForm.get('pokerate')?.value
    }
    
    const headers = { 'content-type': 'application/json'}  

    return this._http.put(this.apiUrl+'pokemons', JSON.stringify(updatedPoke), {'headers': headers})
  }
  */
}
