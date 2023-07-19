import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../models/api-models/payment.model';
import { Reports } from '../models/api-models/reports.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private paymentId1!: string;

  private baseApiUrl = 'https://localhost:7035';

  constructor(private httpClient:HttpClient) { }

  getPaymentId(): string {
    return this.paymentId1;
  }

  setPaymentId(paymentId: string): void {
    this.paymentId1 = paymentId;
  }

  addPayment(paymentRequest:any):Observable<any>{
    return this.httpClient.post<any>(this.baseApiUrl+'/Payment/Add',paymentRequest);
  }
  getReports():Observable<Reports[]>{
    return this.httpClient.get<Reports[]>(this.baseApiUrl+'/Bookings-per-day');}
}
