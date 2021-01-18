import { Component, OnInit } from '@angular/core';
import {Transaction} from "../../../core/model/Transaction";
import {Currency} from "../../../core/model/Currency";

@Component({
  selector: 'app-transactions-board',
  templateUrl: './transactions-board.component.html',
  styleUrls: ['./transactions-board.component.css']
})
export class TransactionsBoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getAllTransactions() : Transaction[]{
    const uah = new Currency(1,'Hryvna','UAH')
    const usd = new Currency(1,'US Dollar','USD')
    return [
      new Transaction(uah,2700,usd,100),
      new Transaction(uah,11260,usd,400),
      new Transaction(uah,14225,usd,500),
      new Transaction(uah,5570,usd,200),
      new Transaction(uah,2815,usd,100),
    ]
  }

}
