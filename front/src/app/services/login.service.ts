import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public logged: boolean = false
  public adminLogged: boolean = false
  public pseudo? : string

  constructor() { }

  public login(pseudo: string, mdp: string) {
    if(pseudo=="admin" && mdp=="admin")
    {
      this.adminLogged = true
    }
    this.logged = true
    this.pseudo = pseudo

  }

  public logout() {
    this.logged = false
    this.adminLogged = false
  }
}
