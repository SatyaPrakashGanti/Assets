import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule,Routes } from '@angular/router';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';

const routes:Routes=[
  {path: 'add-property', component: AddPropertyComponent},
  {path:'', component: PropertyListComponent},
  {path:'rent-property',component:AddPropertyComponent},
  {path:'buy-property',component:AddPropertyComponent},
  {path:'property-detail/:id',component:PropertyDetailComponent}

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
