import { Component, OnInit } from '@angular/core';
import { Departments } from 'src/app/models/api-models/departments.model';
import { DepartmentsService } from '../departments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  departmentId!: number | null;
  department:Departments = {
    departmentId: 0,
    departmentName: ''
  }
  departmentData!:Departments;

  constructor(private readonly departmentsService:DepartmentsService,
    private readonly route: ActivatedRoute,
    private snackbar:MatSnackBar,
    private router:Router){ }

  ngOnInit(): void {

  }

  addDepartment(item:any){
    console.log(item.value);
    this.departmentsService.addDepartment(item.value)
    .subscribe(
      (successResponse) =>{
        this.snackbar.open('Department Details Added Successfully..!',undefined,{
          duration:2000
        });
      },
      (errorResponse) =>{

      }
    )
  }

}
