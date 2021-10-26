import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
@ViewChild('Form',{static:true}) addPropertyForm: NgForm;
  constructor() { }

  ngOnInit() {
  
  }
  onSubmit(Form: NgForm){

  console.log('successfully Added, Congracts');
  //alert('successfully Added, Congracts');
  console.log(this.addPropertyForm);

  }
}
