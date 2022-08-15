import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ProjectAngular13';

  userName = "TestePrincipal"
  title = "Youtube Angular"

  objData = {
    email: "teste@email.com",
    permissao: "Admin"
  }
}
