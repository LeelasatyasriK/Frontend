import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from '../models/api-models/guest.model';
import { UpdateGuestRequest } from '../models/api-models/update-guest-request.model';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private baseApiUrl = 'https://localhost:7035';

  constructor(private httpClient:HttpClient) { }

  getAllGuests():Observable<Guest[]>{
    return this.httpClient.get<Guest[]>(this.baseApiUrl+'/Guests');
  }

  getGuest(guestId:string):Observable<Guest>{
    return this.httpClient.get<Guest>(this.baseApiUrl+'/Guests/'+guestId);
  }

  updateGuest(guestId:string,guestRequest:Guest): Observable<Guest>{
    const updateguestRequest:UpdateGuestRequest = {
      name: guestRequest.name,
      email: guestRequest.email,
      phoneNumber: guestRequest.phoneNumber,
      gender: guestRequest.gender,
      age: guestRequest.age,
      address: guestRequest.address
    }
    return this.httpClient.put<Guest>(this.baseApiUrl+'/Guests/'+guestId,updateguestRequest);
  }

  deleteGuest(guestId:string):Observable<Guest>{
    return this.httpClient.delete<Guest>(this.baseApiUrl+'/Guests/'+guestId);
  }
  addGuest(guestRequest:Guest):Observable<Guest>{
    return this.httpClient.post<Guest>(this.baseApiUrl+'/Guests/add',guestRequest);
  }
}
