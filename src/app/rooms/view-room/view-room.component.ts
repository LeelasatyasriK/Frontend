import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/models/api-models/room.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-room',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.css']
})
export class ViewRoomComponent implements OnInit {

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
      this.route.paramMap.subscribe(params => {
        const roomNumber = params.get('roomNumber');
        this.roomNumber = roomNumber !== null ? Number(roomNumber) : null;
      });

    if(this.roomNumber){

    this.roomService.getRoom(this.roomNumber).subscribe(
      (res: any) => {
        //console.log(this.roomNumber);
        this.roomData = res;
        console.log(this.roomData);
      },

      (err) => {
        console.log("Not Found");
      }

    );
    }

  }

  onUpdate():void{
    this.roomService.updateRoom(this.roomData.roomNumber,this.roomData)
    .subscribe(
      (successResponse) =>{
        this.snackbar.open('Room Details Updated Successfully..!',undefined,{
          duration:2000
        });
      },
      (errorResponse) =>{

      }
    )
  }

  onDelete():void{
    this.roomService.deleteRoom(this.roomData.roomNumber)
    .subscribe(
      (successResponse) =>{
        this.snackbar.open('Room Deleted Successfully',undefined,{
          duration:2000
        });

        setTimeout(()=> {
          this.router.navigateByUrl('rooms');
        },2000);

      },
      (errorResponse) =>{

      }
    )
  }

}
