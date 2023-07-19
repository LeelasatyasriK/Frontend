import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/api-models/login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseApiUrl = 'https://localhost:7035';

  constructor(private httpClient:HttpClient) { }

  Login(loginRequest:Login):Observable<Login>{
    return this.httpClient.post<Login>(this.baseApiUrl+'/api/Auth/Login',loginRequest);
  }
}
