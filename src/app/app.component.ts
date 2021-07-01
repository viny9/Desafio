import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  name:string = 'viny9'

  reciveName(username:string) {
    // console.log(value)
    this.name = username
  }
}
