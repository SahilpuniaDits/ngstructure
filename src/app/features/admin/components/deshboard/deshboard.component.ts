import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-deshboard',
  templateUrl: './deshboard.component.html',
  styleUrls: ['./deshboard.component.css']
})
export class DeshboardComponent implements OnInit {
  // message:string="";
  // approvalText:string="";

  constructor(private appService:EventService) { }

  ngOnInit(): void {
  }
  submit(){
    const stu_data = {
      name:"ankush punia",
      age:23
    }
    // console.log(this.stu_data)
    this.appService.approvalmassage.next(stu_data)
  }

}
