import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-deshboard',
  templateUrl: './seller-deshboard.component.html',
  styleUrls: ['./seller-deshboard.component.css']
})
export class SellerDeshboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // usdinr = "";
  value = 'this IS pipe Exercise';
  date = new Date()
  mony = 4567

}
