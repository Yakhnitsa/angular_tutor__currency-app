import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsBoardComponent } from './transactions-board/transactions-board.component';
import { CurrencyTransactionComponent } from './currency-transaction/currency-transaction.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [TransactionsBoardComponent, CurrencyTransactionComponent, TransactionFormComponent, HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
  ]
})
export class HomeModule { }
