import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() user = new EventEmitter()
  name: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  getUserName() {
    this.user.emit(this.name)
  }

}
