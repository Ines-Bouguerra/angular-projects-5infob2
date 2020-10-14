import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-euro-convert',
  templateUrl: './to-euro-convert.component.html',
  styleUrls: ['./to-euro-convert.component.css'],
})
export class ToEuroConvertComponent implements OnInit {

  toEuro=0;

  @Output() convertMontant=new EventEmitter<number>();

  @Input() 
  set initMontant(val:number){
    console.log(this.toEuro)

    this.toEuro=val*3.4;
    this.convertMontant.emit(this.toEuro);
    console.log(this.toEuro)

  }
  
  constructor() {}

  ngOnInit(): void {}
  
}
