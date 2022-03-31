import { Component, OnInit } from '@angular/core';
import { Link } from '../models/link';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  public pseudonyme: string = ""
  public motdepasse: string = ""
  public loginerror: boolean = false

  public onglets: Link[] =
  [
    {
      title: "Create",
      url: "create",
      isAdminFunction: true
    },
    {
      title: "Delete",
      url: "delete",
      isAdminFunction: true
    },
    {
      title: "GetAll",
      url: "getAll",
      isAdminFunction: false
    },
    {
      title: "GetDetails",
      url: "getDetails",
      isAdminFunction: false
    },
    {
      title: "Update",
      url: "update",
      isAdminFunction: true
    },
    {
      title: "Play",
      url: "play",
      isAdminFunction: false
    }
  ]

  constructor(public _login: LoginService) { }

  ngOnInit(): void {
    this.pseudonyme = this._login.pseudo ?? ""
  }


  public login() {
    this.loginerror = this._login.login(this.pseudonyme, this.motdepasse)
  }
}
