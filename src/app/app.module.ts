import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// Material Layout
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
// Material Popups & Modals
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewRoomComponent } from './rooms/view-room/view-room.component';
import { FormsModule } from '@angular/forms';
import { AddRoomComponent } from './rooms/add-room/add-room.component';
import { StaffComponent } from './staff/staff.component';
import { ViewStaffComponent } from './staff/view-staff/view-staff.component';
import { DepartmentsComponent } from './departments/departments.component';
//import { OwnerNavComponent } from './layout/owner-nav/owner-nav.component';
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
import { LocalStorageService } from 'ngx-webstorage';
import { HomeComponent } from './layout/home/home.component';
import { ManagerComponent } from './manager/manager.component';
import { OwnerComponent } from './owner/owner.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { ViewReportsComponent } from './payment/view-reports/view-reports.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    RoomsComponent,
    ViewRoomComponent,
    AddRoomComponent,
    StaffComponent,
    ViewStaffComponent,
    DepartmentsComponent,
  //  OwnerNavComponent,
    ViewDepartmentComponent,
    AddStaffComponent,
    GuestComponent,
    ViewGuestComponent,
    AddGuestComponent,
    AddDepartmentComponent,
    SearchRoomComponent,
    ReservationComponent,
    PaymentComponent,
    RegisterComponent,
    LoginComponent,
    BillComponent,
    PdfComponent,
    HomeComponent,
    ManagerComponent,
    OwnerComponent,
    ReceptionistComponent,
    ViewReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    HttpClientModule,
    FormsModule
  ],
  // schemas:[
  //   CUSTOM_ELEMENTS_SCHEMA
  // ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
