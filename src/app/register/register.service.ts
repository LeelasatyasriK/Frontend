import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/api-models/register.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseApiUrl = 'https://localhost:7035';

  constructor(private httpClient:HttpClient) { }

  Registration(registerRequest:Register):Observable<Register>{
    return this.httpClient.post<Register>(this.baseApiUrl+'/api/Auth/Register',registerRequest);
  }
}
