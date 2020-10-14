import { Component, OnInit, ViewChild } from '@angular/core';
import { ToEuroConvertComponent } from '../to-euro-convert/to-euro-convert.component';

@Component({
  selector: 'app-convertisseur',
  templateUrl: './convertisseur.component.html',
  styleUrls: ['./convertisseur.component.css'],
})
export class ConvertisseurComponent implements OnInit {
  
montant=0;

  constructor() {}

  ngOnInit(): void {}

  newMontant: number = 0;

  getNewMontant(val: number) {
    console.log(this.newMontant )
    this.newMontant = val;
    console.log(this.newMontant)
  }
  @ViewChild(ToEuroConvertComponent)

private toEuroConvertComponent:ToEuroConvertComponent;

startp(){
this.toEuroConvertComponent.initMontant;
}
}
