import { environment } from './../../../environments/environment';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  api: string = environment.api

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  getRepositories(userName: string): Observable<any> {
    return this.http.get(`${this.api}/users/${userName}/repos`).pipe(
      catchError(() => this.errorMenssage('Ocorreu um erro'))
    )
  }

  getUser(userName: string): Observable<any> {
    return this.http.get(`${this.api}/users/${userName}`).pipe(
      catchError(() => this.errorMenssage('Usuário não foi encontrado'))
    )
  }

  errorMenssage(msg: any) {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['ErrorMenssage']
    })

    return EMPTY
  }

}

