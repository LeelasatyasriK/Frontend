import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../models/api-models/reservation.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseApiUrl = 'https://localhost:7035';

  constructor(private httpClient:HttpClient) { }

  addReservation(reservationRequest:any):Observable<any>{
    return this.httpClient.post<any>(this.baseApiUrl+'/Reservation/Add',reservationRequest);
  }
  getReservation(reservationId:string):Observable<any>{
    return this.httpClient.get<any>(this.baseApiUrl+'/Reservation/'+reservationId);
  }

}
