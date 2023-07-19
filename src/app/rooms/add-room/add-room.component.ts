import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { Room } from 'src/app/models/api-models/room.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit{

  roomNumber!: number | null;
  room:Room = {
    roomNumber:0,
    type :'',
    availableStatus:'',
    price:0
  }
  roomData!:Room;
  constructor(private readonly roomService:RoomService,
    private readonly route: ActivatedRoute,
    private snackbar:MatSnackBar,
    private router:Router){ }
  ngOnInit(): void {

  }

  addroom(item:any){
    console.log(item.value);
    this.roomService.addRoom(item.value)
    .subscribe(
      (successResponse) =>{
        this.snackbar.open('Room Details Added Successfully..!',undefined,{
          duration:2000
        });
      },
      (errorResponse) =>{

      }
    )
  }
}
