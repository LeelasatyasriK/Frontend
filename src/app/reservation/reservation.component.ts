import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/api-models/reservation.model';
import { ReservationService } from './reservation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RoomService } from '../rooms/room.service';
import { Room } from '../models/api-models/room.model';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservationId!: string | null;
  reservationId1!:string | null;
  reservation:Reservation = {
    reservationId: '',
    numberOfAdults: 0,
    numberOfChildren: 0,
    checkInDate: '',
    checkOutDate: '',
    numberOfNights: 0,
    guestId: '',
    roomNumber: 0
  }
  bookingConfirmed: boolean = false;

  reservation1:any= {

    numberOfAdults: 0,
    numberOfChildren: 0,
    checkInDate: '',
    checkOutDate: '',
    numberOfNights: 0,
    guestId: '',
    roomNumber: 0
  }

  room:Room={
    roomNumber: 0,
    type: '',
    availableStatus: '',
    price: 0
  }
  non!:number;
  guesId!:string;
  roomno!:number;
  reservationData!:Reservation;
  minDate: Date;
  constructor(private readonly reservationService:ReservationService,
    private readonly route: ActivatedRoute,
    private roomservice:RoomService,
    private snackbar:MatSnackBar,
    private router:Router){
      this.minDate = new Date();

    }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const guestId = params['guestId'];
      this.guesId = guestId;
      const roomNumber=params['roomNo'];
      this.roomno=roomNumber;
      console.log(roomNumber);
      // Use the room number as needed in your reservation component
    });

  }


  bookConfirm(){
   this.roomservice.getRoom(this.roomno).subscribe((res:any)=>{
       this.room.price=res.price;
       this.room.type=res.type;
       this.room.roomNumber=res.roomNo;
       this.room.availableStatus='Booked'
       console.log(this.room)
      this.changestatus();
   })
  }
   changestatus(){
      this.roomservice.updateRoom(this.roomno,this.room).subscribe(

        (successResponse) => {
          console.log(this.room)
          this.snackbar.open('Room Boooked Successfully..!', undefined, {
            duration: 2000
          });
        },
        (errorResponse) => {
          // Handle any error that occurs during the request

        }
      );

   }

  addreservation(item: any) {
    // Convert the checkInDate and checkOutDate to the desired format
    const formattedCheckInDate = new Date(item.value.checkInDate).toISOString(); // Convert to ISO 8601 format
    const formattedCheckOutDate = new Date(item.value.checkOutDate).toISOString(); // Convert to ISO 8601 format

    const checkIn = new Date(item.value.checkInDate);
    const checkOut = new Date(item.value.checkOutDate);
    const timeDiff = Math.abs(checkOut.getTime() - checkIn.getTime());
    const numberOfnights = Math.ceil(timeDiff / (1000 * 3600 * 24))+1;
    this.non=numberOfnights;
    console.log(numberOfnights);

    // Assign the formatted dates to the reservation object
    this.reservation1.checkInDate = formattedCheckInDate;
    this.reservation1.checkOutDate = formattedCheckOutDate;
    this.reservation1.numberOfNights=numberOfnights;

    // Assign the guestId and roomNumber to the reservation object
    // this.reservation.reservationId='';
    this.reservation1.guestId = this.guesId;
    this.reservation1.roomNumber = this.roomno;
    this.reservation1.numberOfAdults=item.value.numberOfAdults;
    this.reservation1.numberOfChildren=item.value.numberOfChildren;
    //this.reservation1.numberOfNights=item.value.numberOfNights;
    console.log(this.reservation)
    this.reservationService.addReservation(this.reservation1)
      .subscribe(
        (successResponse) => {
          console.log(successResponse.reservationId);
          this.reservationId1 = successResponse.reservationId;
          this.snackbar.open('Booking Details Added Successfully..!', undefined, {
            duration: 2000
          });
        },
        (errorResponse) => {
          // Handle any error that occurs during the request
          this.snackbar.open('Please fill all the details correctly..!', undefined, {
            duration: 2000
          });
        }
      );
  }

  goback(){
    this.redirect("rooms/search");
  }


    redirect(redirect:any) {
      this.router.navigate([redirect]);
       }

  MakePayment(reservationId: string |null) {
   this.router.navigate(['payment/add/:reservationId'], { queryParams: { reservationId: reservationId } });
   }



}
