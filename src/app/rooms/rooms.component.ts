import { Component,OnInit } from '@angular/core';
import { RoomService } from './room.service';
import { Room } from '../models/api-models/room.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

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


  // editRooms(id:number){
  //   this.redirect("/roomsView");
  // }

  editRooms(roomNumber: number) {
    const selectedRoom = this.rooms.find(room => room.roomNumber === roomNumber);

    if (selectedRoom) {
      // Navigate to the view room component with the room details
      this.router.navigate(['/roomsView', selectedRoom.roomNumber]);
      console.log('Selected Room:', selectedRoom);
    } else {
      console.log(`Room with number ${roomNumber} not found.`);
    }
  }
  filter(item:any){
    console.log(item.value.Availability);
    this.roomService.searchroom(item.value.Availability).subscribe((res:any)=>{
      this.rooms=res;
    })


 }

 AddRooms(){
  this.redirect("/room/add");
 }

  redirect(redirect:any) {
    this.router.navigate([redirect]);
     }
}
