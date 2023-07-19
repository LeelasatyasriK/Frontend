import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Room } from '../models/api-models/room.model';
import { UpdateRoomRequest } from '../models/api-models/update-room-request.model';
import { AddRoomRequest } from '../models/add-room-request.model';

// export function RoomServiceFactory(http: HttpClient) {
//   return new RoomService(http);
// }


@Injectable({
  providedIn: 'root',
  // useFactory: RoomServiceFactory,
  // deps: [HttpClient]

})
export class RoomService {

  private baseApiUrl = 'https://localhost:7035';

  constructor(private httpClient:HttpClient) { }

  getRooms():Observable<Room[]>{
    return this.httpClient.get<Room[]>(this.baseApiUrl+'/Room');}

  getRoom(roomNumber:number):Observable<Room>{
    return this.httpClient.get<Room>(this.baseApiUrl+'/Room/'+roomNumber);
  }
  updateRoom(roomNumber:number,roomRequest:Room): Observable<Room>{
    const updateRoomRequest:UpdateRoomRequest = {
      type : roomRequest.type,
      availableStatus : roomRequest.availableStatus,
      price : roomRequest.price
    }
    return this.httpClient.put<Room>(this.baseApiUrl+'/Room/'+roomNumber,updateRoomRequest);
  }

  deleteRoom(roomNumber:number):Observable<Room>{
    return this.httpClient.delete<Room>(this.baseApiUrl+'/Room/'+roomNumber);
  }
  searchroom(availableStatus:string):Observable<Room[]>{
    return this.httpClient.get<Room[]>(this.baseApiUrl+'/'+availableStatus);
  }

  addRoom(roomRequest:Room):Observable<Room>{
    // const addRoomRequest:AddRoomRequest = {
    //   type : roomRequest.type,
    //   availableStatus : roomRequest.availableStatus,
    //   price : roomRequest.price
    // }
    return this.httpClient.post<Room>(this.baseApiUrl+'/Room/add',roomRequest);
  }
}
