import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buyer-details',
  templateUrl: './buyer-details.component.html',
  styleUrls: ['./buyer-details.component.css']
})
export class BuyerDetailsComponent implements OnInit {
  @Output() parentComponent:EventEmitter<any>=new EventEmitter
  constructor() { }

  ngOnInit(): void {

  }
  sendData(){
    let item ={name:'sahil'}
    this.parentComponent.emit(item)

  }
}
