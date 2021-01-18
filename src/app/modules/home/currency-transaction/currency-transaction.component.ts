import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from "../../../core/model/Transaction";

@Component({
  selector: 'app-currency-transaction',
  templateUrl: './currency-transaction.component.html',
  styleUrls: ['./currency-transaction.component.css']
})
export class CurrencyTransactionComponent implements OnInit {
  @Input()
  transaction: Transaction;

  constructor() { }

  ngOnInit(): void {
  }

}
