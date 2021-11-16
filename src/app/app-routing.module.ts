import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule,Routes } from '@angular/router';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RentPropertyComponent } from './rent-property/rent-property.component';
import { UserLoginComponent } from './Users/user-login/user-login.component';
import { UserRegisterComponent } from './Users/user-register/user-register.component';

const routes:Routes=[
  {path:'add-property', component: AddPropertyComponent},
  {path:'', component: PropertyListComponent},
  {path:'rent-property', component: RentPropertyComponent},
  {path:'buy-property', component: AddPropertyComponent},
  {path:'property-detail/:id', component: PropertyDetailComponent},
  {path:'login', component: UserLoginComponent},
  {path:'register', component: UserRegisterComponent},
  {path:'**', component: PagenotfoundComponent}
 

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
