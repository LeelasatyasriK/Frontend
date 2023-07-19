import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { Router } from '@angular/router';
import { Room } from 'src/app/models/api-models/room.model';

@Component({
  selector: 'app-search-room',
  templateUrl: './search-room.component.html',
  styleUrls: ['./search-room.component.css']
})
export class SearchRoomComponent implements OnInit {

  constructor(private roomService:RoomService,private router:Router){ }
  rooms!:Room[];
  ngOnInit(): void {

    this.roomService.getRooms()
    .subscribe(
      (successResponse)=>{
        this.rooms=successResponse;
        console.log(successResponse);
      },
      (errorResponse)=>{
        console.log(errorResponse);
      }
    );
  }

  filter(item:any){
    console.log(item.value.Availability);
    this.roomService.searchroom(item.value.Availability).subscribe((res:any)=>{
      this.rooms=res;
    })
 }

//  MakeReservation(){
//   this.redirect("reservation/add");
//  }

//  MakeReservation(){
//   this.redirect("/guest/add");
//  }
  MakeReservation(roomNumber: number) {
  this.router.navigate(['/guest/add/:roomNumber'], { queryParams: { roomNumber: roomNumber } });
}

  redirect(redirect:any) {
    this.router.navigate([redirect]);
     }
}
