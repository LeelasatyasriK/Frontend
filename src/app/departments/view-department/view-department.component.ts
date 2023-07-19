import { Component, OnInit } from '@angular/core';
import { Departments } from 'src/app/models/api-models/departments.model';
import { DepartmentsService } from '../departments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css']
})
export class ViewDepartmentComponent implements OnInit {
  departmentId!: number | null;
  department:Departments = {
    departmentId:0,
    departmentName :'',
  }

  departmentData!:Departments;
  depatrmentname!:string;
  //departmentData: any = {};

  constructor(private readonly departmentsService:DepartmentsService,
    private readonly route: ActivatedRoute,
    private snackbar:MatSnackBar,
    private router:Router){ }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const departmentId = params.get('departmentId');
      console.log(departmentId);
      this.departmentId = departmentId !== null ? Number(departmentId) : null;

      if (this.departmentId) {
        this.departmentsService.getDepartment(this.departmentId)
          .subscribe(
            (res: any) => {
              this.departmentData = res;
              this.depatrmentname=this.departmentData.departmentName;
              console.log(this.depatrmentname)
            },

            (err) => {
              console.log("Not Found");
            }
          );
      }
    });
  }

  onUpdate():void{
    this.departmentsService.updateDepartment(this.departmentData.departmentId,this.departmentData)
    .subscribe(
      (successResponse) =>{
        this.snackbar.open('Department Details Updated Successfully..!',undefined,{
          duration:2000
        });
      },
      (errorResponse) =>{

      }
    )
  }

  onDelete():void{
    this.departmentsService.deleteDepartment(this.departmentData.departmentId)
    .subscribe(
      (successResponse) =>{
        this.snackbar.open('Department Deleted Successfully',undefined,{
          duration:2000
        });

        setTimeout(()=> {
          this.router.navigateByUrl('departments');
        },2000);

      },
      (errorResponse) =>{

      }
    )
  }

}
