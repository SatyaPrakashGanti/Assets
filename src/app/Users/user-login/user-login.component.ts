import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService:AuthService, private alertifynotification:AlertifyService, private router:Router) { }

  ngOnInit() {
  }
  onSubmit(loginForm:NgForm)
  {
console.log(loginForm.value);
const token= this.authService.authUser(loginForm.value);
if(token)
{
  localStorage.setItem('token',token.userName);
  // console.log("login successfully");
  this.alertifynotification.Success("Login Successfully");
this.router.navigate(['/']);
}
else{
  // console.log("login failed");
  this.alertifynotification.Error("UserID or Password is wrong");
}
  }
}
