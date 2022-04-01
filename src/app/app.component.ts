import { Component,OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { EventService } from './core/services/event.service';
import { BuyerDeshboardComponent } from './features/buyer/components/buyer-deshboard/buyer-deshboard.component';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'ngstructure';
  name=""
  fname: any;
  //exchange data through event service in dashboard
  constructor(private appService : EventService){}
  ngOnInit(){
    this.appService.approvalmassage.subscribe(aa=>{
      console.log(aa)
      this.fname=aa
    })
  }
  // exchange data child to parent throught output in admin buyerdetails
  parentComponent(data:any)
  {
    console.warn(data)
    this.name=data.name
  }
   // exchange data parent to child throught Input in admin sellerdetails
  emp_name ={
    name:"arpan saini",
    age:25
}
dummy ="punia"
update(){
  this.dummy = "jaat";
}
 // exchange data child to parent throught viewchild in buyer buyerashboard
message :string ="";
 @ViewChild(BuyerDeshboardComponent) child!: BuyerDeshboardComponent

 ngAfterViewInit(): void {
   console.log(this.child.childData)
   this.message= this.child.childData
 }
}
