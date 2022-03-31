import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public logged: boolean = false
  public adminLogged: boolean = false
  public pseudo? : string

  constructor() { }

  public login(pseudo: string, mdp: string): boolean {

    let loginerror = this.checkAdmin(pseudo, mdp)

    if(!loginerror)
    {
      this.logged = true
      this.pseudo = pseudo
    }

    return loginerror
  }

  public logout() {
    this.logged = false
    this.adminLogged = false
  }

  public checkAdmin(pseudo: string, mdp: string): boolean {
  let loginerror = false
  if(pseudo=="admin")
  {
    if(mdp=="adminMDP")
    {
      this.adminLogged = true
    }
    else
    {
      loginerror = true
    }

  }

  return loginerror
}

}

