import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { ViewRoomComponent } from './rooms/view-room/view-room.component';
import { AddRoomComponent } from './rooms/add-room/add-room.component';
import { StaffComponent } from './staff/staff.component';
import { ViewStaffComponent } from './staff/view-staff/view-staff.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ViewDepartmentComponent } from './departments/view-department/view-department.component';
import { AddStaffComponent } from './staff/add-staff/add-staff.component';
import { GuestComponent } from './guest/guest.component';
import { ViewGuestComponent } from './guest/view-guest/view-guest.component';
import { AddGuestComponent } from './guest/add-guest/add-guest.component';
import { AddDepartmentComponent } from './departments/add-department/add-department.component';
import { SearchRoomComponent } from './rooms/search-room/search-room.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BillComponent } from './bill/bill.component';
import { PdfComponent } from './bill/pdf/pdf.component';
import { HomeComponent } from './layout/home/home.component';
import { ManagerComponent } from './manager/manager.component';
import { OwnerComponent } from './owner/owner.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { ViewReportsComponent } from './payment/view-reports/view-reports.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'rooms',
    component:RoomsComponent
  },
  {
    path:'roomsView/:roomNumber',
    component:ViewRoomComponent
  },
  {
    path:'room/add',
    component:AddRoomComponent
  },

  {
    path:'staff',
    component:StaffComponent
  },
  {
    path:'staffView/:employeeId',
    component:ViewStaffComponent
  },
  {
    path:'staff/add',
    component:AddStaffComponent
  },

  {
    path:'departments',
    component:DepartmentsComponent
  },
  {
    path:'departments/:departmentId',
    component:ViewDepartmentComponent
  },
  {
    path:'department/add',
    component:AddDepartmentComponent
  },
 {
    path:'guests/:guestId',
    component:ViewGuestComponent
  },
  {
    path:'guests',
    component:GuestComponent
  },

  {
    path:'guest/add/:roomNumber',
    component:AddGuestComponent
  },
  {
    path:'rooms/search',
    component:SearchRoomComponent
  },
  {
    path:'reservation/add/:guestId/:roomNo',
    component:ReservationComponent
  },
  {
    path:'payment/add/:reservationId',
    component:PaymentComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'bill',
    component:BillComponent
  },
  {
    path:'pdf',
    component:PdfComponent
  },
  {
    path:'manager',
    component:ManagerComponent
  },
  {
    path:'owner',
    component:OwnerComponent
  },
  {
    path:'receptionist',
    component:ReceptionistComponent
  },
  {
    path:'view-reports',
    component:ViewReportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
