import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId:number;
  constructor(private route:ActivatedRoute, private routes:Router) { }

  ngOnInit() {
    this.propertyId=+this.route.snapshot.params["id"];

    this.route.params.subscribe(
      (params)=>
    {

      this.propertyId=+params['id'];


    });
  }

  onback():void
  {
this.routes.navigate(["/"]);
  }

  onselectNext()
  {
    this.propertyId+=1;
    this.routes.navigate(['property-detail',this.propertyId]);
  }

}
