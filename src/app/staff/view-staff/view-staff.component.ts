import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Staff } from 'src/app/models/api-models/staff.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css']
})
export class ViewStaffComponent implements OnInit {
  employeeId! : number|null;
  staff:Staff = {
    employeeId: 0,
    employeeName: '',
    age: 0,
    employeeAddress: '',
    salary: 0,
    designation: '',
    email: '',
    phoneNumber: ''
  }
  staffData!:Staff;
 // staffData: Staff = {} as Staff;


 constructor(private readonly staffService:StaffService,
  private readonly route: ActivatedRoute,
  private snackbar:MatSnackBar,
  private router:Router){ }
ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const employeeId = params.get('employeeId');
    console.log(employeeId);
    this.employeeId = employeeId !== null ? Number(employeeId) : null;

    if (this.employeeId) {
      this.staffService.getStaffById(this.employeeId)
        .subscribe(
          (res: any) => {
            this.staffData = res;
            console.log(this.staffData);
          },
          (err) => {
            console.log("Not Found");
          }
        );
    }
  });
}


  onUpdate():void{
    this.staffService.updateStaffDetails(this.staffData.employeeId,this.staffData)
    .subscribe(
      (successResponse) =>{
        this.snackbar.open('Staff Details Updated Successfully..!',undefined,{
          duration:2000
        });
      },
      (errorResponse) =>{

      }
    )
  }

  onDelete():void{
    this.staffService.deleteStaff(this.staffData.employeeId)
    .subscribe(
      (successResponse) =>{
        this.snackbar.open('Staff details Deleted Successfully',undefined,{
          duration:2000
        });

        setTimeout(()=> {
          this.router.navigateByUrl('staff');
        },2000);

      },
      (errorResponse) =>{

      }
    )

  }

}



