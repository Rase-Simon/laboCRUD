import { Component, OnInit } from '@angular/core';
import { Link } from '../models/link';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
