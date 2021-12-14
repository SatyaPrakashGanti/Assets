import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  Success(message:string)
  {
  alertify.success(message);
  }
  Error(message:string)
  {
    alertify.error(message);
  }
}
