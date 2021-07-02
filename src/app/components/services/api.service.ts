import { environment } from './../../../environments/environment';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})


export class ApiService {  
  
  api: string = environment.api

  
  constructor ( private http:HttpClient, private snackBar:MatSnackBar ) { }
  
  
  repos(userName:string) :Observable<any> {
    return this.http.get(this.api+'/users/'+userName+'/repos')
  }
  
  user(userName:string) :Observable<any> {
    return this.http.get(this.api+'/users/'+userName).pipe(
      catchError(e => this.handleError(e))
    )
  }

  errorMenssage(msg:string, isError:boolean = false){
    this.snackBar.open(msg, 'X',{
     duration: 3000,
     horizontalPosition:"right",
     verticalPosition:"top",
     panelClass:['ErrorMenssage']
    })
  }

  handleError(e:any):Observable<any>{
    this.errorMenssage('User not found. Error 404',true )
    return EMPTY
  }


}

