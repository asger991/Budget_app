import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})

export class CurrentComponent implements OnInit {

  rForm: FormGroup;
  // itemCount: number;
  item: any;
  type: string;
  descriptoon: string;
  amount: number;
  data = [];
  // const arr: Data<{type: string, description: string, amount: number}> = [];

  // incomeList: [];
  // data:{
  // typeType: boolean,
  // typeDescription: string,
  // typeValue: number,
  // }
  // income = [];
  // data = [];

  constructor(private fb: FormBuilder) {

    this.rForm = fb.group({
      'type' : [null, Validators.required],
      'description' : [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(50)])],
      'amount' : [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(10)])]
    })
  }

addItem(item) {
  this.item = item.type;
  this.item = item.description;
  this.item = item.amount;
}

  ngOnInit() {
    // this.itemCount = this.income.length;
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
