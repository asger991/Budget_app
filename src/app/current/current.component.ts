import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})

export class CurrentComponent implements OnInit {

  itemCount: number;
  type: string;
  descriptoon: string;
  amount: number;
  const arr: Data<{type: string, description: string, amount: number}> = [];

  // incomeList: [];
  // data:{
  // typeType: boolean,
  // typeDescription: string,
  // typeValue: number,
  // }
  // income = [];
  // data = [];

  constructor() {

  }


  ngOnInit() {
    this.itemCount = this.income.length;
  }

// addItem() {
//   this.income.push({desc: this.valueDescriptoon, val: this.valueAmount});
//   console.log(this.income);
//   // New object
//   // If else for inc/exp (ngIf)
//   this.valueDescriptoon = '';
//   this.valueAmount = '';
//   this.itemCount = this.income.length;
// }

}
