import { Component, OnInit } from '@angular/core';
import { GuestService } from './guest.service';
import { Router } from '@angular/router';
import { Guest } from '../models/api-models/guest.model';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  constructor(private guestService:GuestService,private router:Router){ }
  guests!:Guest[];

  ngOnInit(): void {
     this.guestService.getAllGuests()
    .subscribe(
      (successResponse)=>{
        this.guests=successResponse;
        console.log(successResponse);
      },
      (errorResponse)=>{
        console.log(errorResponse);
      }
    );
  }

  editGuestDetails(guestId:string){
    const selectedGuest = this.guests.find(guest => guest.guestId === guestId);

    if (selectedGuest) {
      // Navigate to the view room component with the room details
      this.router.navigate(['/guests', selectedGuest.guestId]);
      //console.log('Selected Guest:', selectedRoom);
    } else {
      console.log(`Guest with id ${guestId} not found.`);
    }
  }

  AddGuest(){
    this.redirect("/guest/add/:roomNumber");
  }

  redirect(redirect:any) {
   this.router.navigate([redirect]);
  }

}
