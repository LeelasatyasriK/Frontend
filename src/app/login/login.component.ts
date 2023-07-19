import { Component, OnInit } from '@angular/core';
import { Login } from '../models/api-models/login.model';
import { LoginService } from './login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  login:Login={
    username: '',
    password: ''
  }
  selectedRole: string = '';

  constructor(private readonly loginService:LoginService,
    private readonly route: ActivatedRoute,
    private snackbar:MatSnackBar,
    private router:Router,
    private localStorageService: LocalStorageService){ }

  ngOnInit(): void {

  }

  loginmethod(item:any): void {

    this.login.password=item.value.password;
    this.login.username=item.value.username;


    this.loginService.Login(this.login)
      .subscribe(
        (successResponse) => {
          // if (this.selectedRole === 'manager') {
          //   // Navigate to the manager component
          //   this.router.navigate(['/manager']);
          // } else {
          //   // Handle navigation for other roles or scenarios
          // }
          //this.localStorageService.store('loggedInRole', this.selectedRole);
          this.snackbar.open('Login Successful..!', undefined, {
            duration: 2000
          });
           // Check the selected role and navigate accordingly
        if (this.selectedRole === 'manager') {
          this.router.navigate(['/manager']);
        } else if (this.selectedRole === 'owner') {
          this.router.navigate(['/owner']);
        } else if (this.selectedRole === 'receptionist') {
          this.router.navigate(['/receptionist']);
        }
        },
        (errorResponse) => {
          this.snackbar.open('Invalid Username/Password', undefined, {
            duration: 2000
          });
        }
      );
  }

  onRoleSelection(event: any): void {
    this.selectedRole = event.value;
    console.log(this.selectedRole);
  }

}
