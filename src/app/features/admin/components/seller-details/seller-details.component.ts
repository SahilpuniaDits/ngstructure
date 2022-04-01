import { Component, OnInit,Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-seller-details',
  templateUrl: './seller-details.component.html',
  styleUrls: ['./seller-details.component.css']
})
export class SellerDetailsComponent implements OnInit,OnChanges,DoCheck ,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input() hero:any
  @Input() public dummy: any;
  constructor() {
    console.log('constructor called')
   }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called')

  }
  ngOnInit(): void {
    console.log('ngOnInit called')
    
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called')

  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called')

  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called')

  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called')

  }
  value!: string;
  exist :boolean= true
  submitValue(val:any){
    this.value=val.value
  }
  destroy(){
    this.exist =false;
  }
}
