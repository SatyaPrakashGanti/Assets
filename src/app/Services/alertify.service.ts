import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  Success(message:string)
  {
  alertify.success("Congrats!, you are successfully registered");
  }
  Error(message:string)
  {
    alertify.error("Kindly provide the required fields");
  }
}
