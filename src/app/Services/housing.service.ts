import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { IProperty } from '../iproperty';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }
  geAlltProperties():Observable<IProperty[]>
  {
  return this.http.get('data/properties.json').pipe(
    map(data=>{
      const propertyArray:Array<IProperty>=[];
      for(const id in data)
      {
        if(data.hasOwnProperty(id))
        {
        propertyArray.push(data[id]);
        }
      }
      return propertyArray;
    })

  );
  }
}
