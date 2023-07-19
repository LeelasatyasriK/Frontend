import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/models/api-models/guest.model';
import { GuestService } from '../guest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.css']
})
export class AddGuestComponent implements OnInit {
  guestId1!: string | null;
  guest:Guest = {
    guestId: '',
    name: '',
    email: '',
    phoneNumber: '',
    gender: '',
    age: 0,
    address: ''
  }
  saveButtonClicked: boolean = false;
  guestData!:Guest;
  roomNo!:number;
  constructor(private readonly guestService:GuestService,
    private readonly route: ActivatedRoute,
    private snackbar:MatSnackBar,
    private router:Router){ }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let roomNumber = params['roomNumber'];
      this.roomNo=roomNumber;

      // Use the room number as needed in your reservation component
    });
  }

  addguest(item: any) {
    this.guestService.addGuest(item.value).subscribe(
      (successResponse) => {
        console.log(successResponse.guestId);
        console.log(item.value);
        console.log(this.roomNo)
        // Access the generated guestId from the response
        this.guestId1=successResponse.guestId;
        this.snackbar.open('Guest Details Added Successfully..!', undefined, {
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

  Bookroom(guestId: string |null) {
    this.router.navigate(['reservation/add/:guestId/:roomNo'], { queryParams: { guestId: guestId , roomNo: this.roomNo } });
  }

}
