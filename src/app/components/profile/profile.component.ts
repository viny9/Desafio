import { ApiService } from './../services/api.service';
import { Component, Input, OnInit, SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() user:string = ''
  userData:any = {}
  repoData:any = ''

  constructor(private api:ApiService) { }
  
  ngOnInit() {
 }

 ngOnChanges(changes:SimpleChanges){
  this.profile(changes.user.currentValue)
  this.repos(changes.user.currentValue)
 }

 profile(value:any){
  this.api.user(value).subscribe((values)=>{
    this.userData = values
    // console.log(this.datas)
  })
 }

 repos(value:string) {
  this.api.repos(value).subscribe((values)=>{
    this.repoData = values 
    // console.log(this.repoData)
  })
 }

}
