import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties:any;
  constructor(private http:HttpClient) { }

  ngOnInit():void {

    this.http.get('data/properties.json').subscribe
    (
    data=>{
      this.Properties=data;
      console.log(data);
    }

    );
  }

}
