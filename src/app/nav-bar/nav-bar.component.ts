import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../Services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  constructor(private alertify:AlertifyService) { }
  loggedInUser:string;
  ngOnInit() {
  }
onLoggedIn()
{
  this.loggedInUser= localStorage.getItem('token');
return this.loggedInUser;
}
onLogOut()
{
  localStorage.removeItem('token');
  this.alertify.Success("Logged Out");
}
}
