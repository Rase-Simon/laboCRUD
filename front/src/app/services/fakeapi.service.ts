import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Poke } from '../models/poke';

@Injectable({
  providedIn: 'root'
})
export class FakeapiService {

  public apiUrl: string = "http://localhost:3000/"

  constructor(public _http : HttpClient) { }

  getAllPoke(): Observable<Poke[]> {
    return this._http.get<Poke[]>(this.apiUrl+'pokemons')
    .pipe(map(d => this._toPokeList(d)))
  }

  getOnePoke(id: number): Observable<Poke> {
    return this._http.get<Poke>(this.apiUrl+'pokemons/'+(id))
    .pipe(map(d => this._toPoke(d)))
  }

  addPoke(newPokeForm: FormGroup): Observable<any> {
    let newPoke : Poke = new Poke(
      newPokeForm.get('pokeid')?.value,
      newPokeForm.get('pokename')?.value,
      newPokeForm.get('pokerate')?.value
      )
    
    const headers = { 'content-type': 'application/json'}  

    return this._http.post(this.apiUrl+'pokemons', JSON.stringify(newPoke), {'headers': headers})
  }
  
  
  updatePoke(id: number, updatedPokeForm: FormGroup): Observable<any> {
    let updatedPoke : Poke = new Poke(
      id,
      updatedPokeForm.get('pokename')?.value,
      updatedPokeForm.get('pokerate')?.value
    )
    
    const headers = { 'content-type': 'application/json'}  

    return this._http.put(this.apiUrl+'pokemons/' + id, JSON.stringify(updatedPoke), {'headers': headers})
  }

  public deletePoke(id: number): Observable<unknown> {
    console.log("delete service")
    return this._http.delete(this.apiUrl + 'pokemons/' + id)
  }
  
  public _toPokeList(data: Poke[]): Poke[] {
    let result: Poke[] = []

    data.forEach(
      poke => result.push(new Poke(poke.id, poke.name, poke.capture_rate))
    )

    return result
  }

  public _toPoke(data: Poke): Poke {
    let result: Poke = new Poke(data.id, data.name, data.capture_rate)
    return result
  }
}
