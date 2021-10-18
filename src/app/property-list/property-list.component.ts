
import { Component, OnInit } from '@angular/core';


import { HousingService } from '../Services/housing.service';
import { IProperty } from '../iproperty';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
SellRent=1;
  Properties:Array<IProperty>;
  constructor(private housingservice:HousingService,private route:ActivatedRoute) { }

  ngOnInit():void {

    if(this.route.snapshot.url.toString())
    {
      this.SellRent=2;
    }
   this.housingservice.geAlltProperties(this.SellRent).subscribe
    (
    (data) =>
    {
      console.log(this.route.snapshot.url.toString());
      this.Properties=data;
      console.log(data);
    },error =>
    {
      console.log(error);
    }
    );
  }

}
