import { ApiService } from './../services/api.service';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() user: any
  userData: any
  repositoriesData: any

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadProfile(changes.user.currentValue)
  }

  loadProfile(value: string) {
    this.api.getUser(value).subscribe((values) => {
      this.userData = values
      this.loadRepositories(value)
    })
  }

  loadRepositories(value: string) {
    this.api.getRepositories(value).subscribe((values) => {
      this.repositoriesData = values
    })
  }

}