import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Staff } from '../models/api-models/staff.model';
import { Observable } from 'rxjs';
import { UpdateStaffRequest } from '../models/api-models/update-staff-request.models';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private baseApiUrl = 'https://localhost:7035';

  constructor(private httpClient:HttpClient) { }

  getStaff():Observable<Staff[]>{
    return this.httpClient.get<Staff[]>(this.baseApiUrl+'/staff');
  }

  getStaffById(employeeId:number):Observable<Staff>{
    return this.httpClient.get<Staff>(this.baseApiUrl+'/staff/'+employeeId);
  }

  updateStaffDetails(employeeId:number,staffRequest:Staff): Observable<Staff>{
    const updateStaffRequest:UpdateStaffRequest = {
      employeeName: staffRequest.employeeName,
      age:staffRequest.age,
      employeeAddress: staffRequest.employeeAddress,
      salary: staffRequest.salary,
      designation: staffRequest.designation,
      email: staffRequest.email,
      phoneNumber:staffRequest.phoneNumber
    }
    return this.httpClient.put<Staff>(this.baseApiUrl+'/staff/'+employeeId,updateStaffRequest);
  }

  deleteStaff(employeeId:number):Observable<Staff>{
    return this.httpClient.delete<Staff>(this.baseApiUrl+'/staff/'+employeeId);
  }


  addStaff(staffRequest:Staff):Observable<Staff>{

    return this.httpClient.post<Staff>(this.baseApiUrl+'/staff/add',staffRequest);
  }
}
