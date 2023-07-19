import { Component, OnInit } from '@angular/core';
import { Register } from '../models/api-models/register.model';
import { RegisterService } from './register.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  roles1: string[] = ['owner', 'manager', 'receptionist'];
  register:Register = {
    username: '',
    password: '',
    phoneNumber: '',
    roles: []
  }
  registerData!:Register;

  constructor(private readonly registerService:RegisterService,
    private readonly route: ActivatedRoute,
    private snackbar:MatSnackBar,
    private router:Router){ }

  ngOnInit(): void {

  }

  registration(item:any): void {



    this.register.roles = [item.value.roles];
    this.register.password=item.value.password;
    this.register.username=item.value.username;
    this.register.phoneNumber=item.value.phoneNumber

    this.registerService.Registration(this.register)
      .subscribe(
        (successResponse) => {
          this.snackbar.open('Registered Successfully!', undefined, {
            duration: 2000
          });
        },
        (errorResponse) => {
          this.snackbar.open('Registered Successfully!', undefined, {
            duration: 2000
          });
        }
      );
  }
  moveToLogin(){
    this.redirect("/login");
  }
 redirect(redirect:any){
  this.router.navigate([redirect]);
 }
}
