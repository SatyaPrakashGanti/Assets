import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
 import{TabsModule} from 'ngx-bootstrap/tabs';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { HousingService } from './Services/housing.service';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RentPropertyComponent } from './rent-property/rent-property.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserLoginComponent } from './Users/user-login/user-login.component';
import { UserRegisterComponent } from './Users/user-register/user-register.component'
import { AlertifyService } from './Services/alertify.service';
import { UserService } from './Services/user.service';
import { AuthService } from './Services/auth.service';
import{ButtonsModule} from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PropertyCardComponent,
    PropertyListComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    PagenotfoundComponent,
    RentPropertyComponent,
    UserLoginComponent,
    UserRegisterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot()
    
  ],
  providers: [HousingService,AlertifyService,UserService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
