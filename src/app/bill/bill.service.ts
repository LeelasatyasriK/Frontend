import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from '../models/api-models/bill.model';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  private billId1!: string;

  private baseApiUrl = 'https://localhost:7035';

  constructor(private httpClient:HttpClient) { }

  setBillId(billId: string): void {
    this.billId1 = billId;
  }

  getBillId(): string {
    return this.billId1;
  }

  addBill(billRequest:Bill):Observable<any>{
    return this.httpClient.post<Bill>(this.baseApiUrl+'/Bill/Add',billRequest);
  }

  // generateBill(billId:string):Observable<Bill>{
  //   return this.httpClient.get<Bill>(this.baseApiUrl+'/generatepdf'+billId);
  // }

  generateBill(billId: any) {
   // return this.httpClient.get<Bill>(`${this.baseApiUrl}/generatepdf?billId=${billId}`);
  // return this.httpClient.get<Bill>(`${this.baseApiUrl}/generatepdf/${billId}`, { observe: 'response' });
    return this.httpClient.get(this.baseApiUrl+'/generatepdf?billId='+billId,{ observe: 'response',responseType:'blob'});
  }


}
