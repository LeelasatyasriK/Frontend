import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/models/api-models/guest.model';
import { GuestService } from '../guest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-guest',
  templateUrl: './view-guest.component.html',
  styleUrls: ['./view-guest.component.css']
})
export class ViewGuestComponent implements OnInit{

  guestId!: string | null;
  guest:Guest = {
    guestId: '',
    name: '',
    email: '',
    phoneNumber: '',
    gender: '',
    age: 0,
    address: ''
  }
  guestData!:Guest;

  constructor(private readonly guestService:GuestService,
    private readonly route: ActivatedRoute,
    private snackbar:MatSnackBar,
    private router:Router){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const guestId = params.get('guestId');
      this.guestId = guestId !== null ? guestId : null;
    });
  if(this.guestId){

  this.guestService.getGuest(this.guestId).subscribe(
    (res: any) => {
      //console.log(this.roomNumber);
      this.guestData = res;
      console.log(this.guestData);
    },

    (err) => {
      console.log("Not Found");
    }

  );
  }

  }

  onUpdate():void{
    this.guestService.updateGuest(this.guestData.guestId,this.guestData)
    .subscribe(
      (successResponse) =>{
        this.snackbar.open('Guest Details Updated Successfully..!',undefined,{
          duration:2000
        });
      },
      (errorResponse) =>{

      }
    )
  }

  onDelete():void{
    this.guestService.deleteGuest(this.guestData.guestId)
    .subscribe(
      (successResponse) =>{
        this.snackbar.open('guest Details Deleted Successfully',undefined,{
          duration:2000
        });

        setTimeout(()=> {
          this.router.navigateByUrl('guests');
        },2000);

      },
      (errorResponse) =>{

      }
    )
  }

}
