import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from './departments.service';
import { Router } from '@angular/router';
import { Departments } from '../models/api-models/departments.model';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor(private departmentsService:DepartmentsService,private router:Router){ }
  departments!:Departments[];

  ngOnInit(): void {

    this.departmentsService.getDepartments()
    .subscribe(
      (successResponse)=>{
        this.departments=successResponse;
        console.log(successResponse);
      },
      (errorResponse)=>{
        console.log(errorResponse);
      }
    );
  }

  editDepartments(departmentId:number):void{
    const selectedDepartment = this.departments.find(department => department.departmentId === departmentId);

    if (selectedDepartment) {
      // Navigate to the view room component with the room details
      this.router.navigate(['/departments', selectedDepartment.departmentId]);
      console.log('Selected Department:', selectedDepartment);
    } else {
      console.log(`Department with Id ${departmentId} not found.`);
    }
  }


 AddDepartment(){
  this.redirect("/department/add");
 }

  redirect(redirect:any) {
    this.router.navigate([redirect]);
     }

}
