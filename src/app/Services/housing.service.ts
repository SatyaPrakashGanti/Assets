import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

import { IPropertyBase } from '../model/ipropertybase';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }
  geAlltProperties(SellRent:number):Observable<IPropertyBase[]>
  {
  return this.http.get('data/properties.json').pipe(
    map(data=>{
      const propertyArray:Array<IPropertyBase>=[];
      for(const id in data)
      {
        if(data.hasOwnProperty(id) && data[id].SellRent===SellRent)
        {
        propertyArray.push(data[id]);
        }
      }
      return propertyArray;
    })

  );
  }
}
