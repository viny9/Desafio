import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = 'viny9' // Mudar para seu nome de usuário 

  reciveName(username: string) {
    this.name = username
  }
}
