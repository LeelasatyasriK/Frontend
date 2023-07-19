import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/models/api-models/staff.model';
import { StaffService } from '../staff.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

  employeeId!: number | null;
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

  constructor(private readonly staffService:StaffService,
    private readonly route: ActivatedRoute,
    private snackbar:MatSnackBar,
    private router:Router){ }

  ngOnInit(): void {

  }
  addstaff(item:any){
    console.log(item.value);
    this.staffService.addStaff(item.value)
    .subscribe(
      (successResponse) =>{
        this.snackbar.open('Staff Details Added Successfully..!',undefined,{
          duration:2000
        });
      },
      (errorResponse) =>{

      }
    )
  }

}
