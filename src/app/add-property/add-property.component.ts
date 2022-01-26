import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../iproperty';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
@ViewChild('Form',{static:false}) addPropertyForm: NgForm;
@ViewChild('formTabs',{static:false}) formTabs:TabsetComponent
  constructor(private router:Router) { }
// will come from masters
propertyType:Array<string>=['House','Apartment','Villa','Individual'];
furnishedType:Array<string>=['semi','full','unfurnished'];
propertyView:IProperty={
  Id:null,
  Name:'',
  Price:null,
  SellRent:null,
  Type:null

};
  ngOnInit() {
  
  }
  onBack()
  {
this.router.navigate(['/']);
  }
  onSubmit(Form: NgForm){

  console.log('successfully Added, Congracts');
  //alert('successfully Added, Congracts');
  console.log(this.addPropertyForm);

  }
  selectTab(tabId:number)
  {
   this.formTabs.tabs[tabId].active=true;
  }
}
