import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyer-deshboard',
  templateUrl: './buyer-deshboard.component.html',
  styleUrls: ['./buyer-deshboard.component.css']
})
export class BuyerDeshboardComponent implements OnInit {
  childData : string ="data from child component"

  constructor() { }

  ngOnInit(): void {
  }

}
