import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties:Array<any>=[
  {
    "Id":1,
    "Name":"Birla",
    "Type":"House",
    "Price":150000
  },
  {
    "Id":2,
    "Name":"Gachibowli",
    "Type":"Flat",
    "Price":670000
  },
  {
    "Id":3,
    "Name":"Ramanthapur",
    "Type":"Single BHK",
    "Price":250000
  },
  {
    "Id":4,
    "Name":"AshokNagar",
    "Type":"House",
    "Price":150000
  },
  {
    "Id":5,
    "Name":"Birla",
    "Type":"Flat",
    "Price":190000
  },
  {
    "Id":6,
    "Name":"Saroornagar",
    "Type":"Flat",
    "Price":150000
  },
  {
    "Id":7,
    "Name":"Saroornagar",
    "Type":"2 BHK",
    "Price":1150000
  },
  {
    "Id":8,
    "Name":"Saroornagar",
    "Type":"Individual",
    "Price":1250000
  }

]
  constructor() { }

  ngOnInit() {
  }

}
