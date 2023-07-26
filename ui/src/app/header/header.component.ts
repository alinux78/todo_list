import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title : string = "Todo List"

  constructor(private keycloakService: KeycloakService) {}

  logout() {
    this.keycloakService.logout();
  }
  ngOnInit(): void {
  }

}
