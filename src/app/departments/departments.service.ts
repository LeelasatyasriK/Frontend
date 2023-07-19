import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departments } from '../models/api-models/departments.model';
import { Observable } from 'rxjs';
import { UpdateDepartmentRequest } from '../models/api-models/update-department-request.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  private baseApiUrl = 'https://localhost:7035';

  constructor(private httpClient:HttpClient) { }

  getDepartments():Observable<Departments[]>{
    return this.httpClient.get<Departments[]>(this.baseApiUrl+'/Departments');}

  getDepartment(departmentId:number):Observable<Departments>{
    return this.httpClient.get<Departments>(this.baseApiUrl+'/Departments/'+ departmentId);
   }

   updateDepartment(departmentId:number,departmentRequest:Departments): Observable<Departments>{
    const updateDepartmentRequest:UpdateDepartmentRequest = {
      departmentName : departmentRequest.departmentName,
    }
    return this.httpClient.put<Departments>(this.baseApiUrl+'/Departments/'+departmentId,updateDepartmentRequest);
  }

  deleteDepartment(departmentId:number):Observable<Departments>{
    return this.httpClient.delete<Departments>(this.baseApiUrl+'/Departments/'+departmentId);
  }
  addDepartment(departmentRequest:Departments):Observable<Departments>{
    return this.httpClient.post<Departments>(this.baseApiUrl+'/Departments/add',departmentRequest);
  }
}
