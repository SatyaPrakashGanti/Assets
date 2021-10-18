
import { Component, OnInit } from '@angular/core';


import { HousingService } from '../Services/housing.service';
import { IProperty } from '../iproperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties:Array<IProperty>;
  constructor(private housingservice:HousingService) { }

  ngOnInit():void {

   this.housingservice.geAlltProperties().subscribe
    (
    (data) =>
    {
      this.Properties=data;
      console.log(data);
    },error =>
    {
      console.log(error);
    }
    );
  }

}
