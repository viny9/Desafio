import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})


export class ApiService {  
  
  api: string = environment.api

  
  constructor ( private http:HttpClient ) { }
  
  
  repos(userName:string) :Observable<any> {
    return this.http.get(this.api+'/users/'+userName+'/repos')
  }
  
  user(userName:string) :Observable<any> {
    return this.http.get(this.api+'/users/'+userName)
  }

}

