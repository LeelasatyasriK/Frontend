import { Component, OnInit } from '@angular/core';
import { StaffService } from './staff.service';
import { Staff } from '../models/api-models/staff.model';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit{
  staff!:Staff[];
  displayedColumns:string[]=['employeeId','employeeName','age','employeeAddress','salary','designation','email','phoneNumber','edit'];
  dataSource:MatTableDataSource<Staff> = new MatTableDataSource<Staff>();
  constructor(private staffService:StaffService,private router:Router){}

  ngOnInit(): void {
    this.staffService.getStaff()
    .subscribe(
      (successResponse)=>{
        this.staff = successResponse;
        this.dataSource = new MatTableDataSource<Staff>(this.staff);
      },
      (errorResponse)=>{
        console.log(errorResponse);
      }

    );
  }

  editStaff(employeeId: number) {
    const selectedStaff = this.staff.find(staff => staff.employeeId === employeeId);

    if (selectedStaff) {
      // Navigate to the view room component with the room details
      this.router.navigate(['/staffView', selectedStaff.employeeId]);
     // console.log('Selected Staff:', selectedStaff);
    } else {
      console.log(`Staff with Id ${employeeId} not found.`);
    }
  }

  AddStaff(){
    this.redirect("/staff/add");
   }

    redirect(redirect:any) {
      this.router.navigate([redirect]);
       }

}
