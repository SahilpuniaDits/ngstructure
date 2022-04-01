import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  approvalmassage:BehaviorSubject<any>;

  constructor() { 
    this.approvalmassage = new BehaviorSubject<any>({});
    console.log(this.approvalmassage)
  }
}
