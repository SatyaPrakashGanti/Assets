import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
Property:any=
{
  "Id":1,
  "Name":"Birla",
  "Type":"House",
  "Price":150000
}
}
