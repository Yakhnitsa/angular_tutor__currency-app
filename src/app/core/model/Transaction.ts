import {Currency} from "./Currency";

export class Transaction{
  public purchasedCurrency: Currency;
  public purchasedAmount: number;
  public soldCurrency: Currency;
  public soldAmount: number;


  constructor(purchasedCurrency: Currency, purchasedAmount: number, soldCurrency: Currency, soldAmount: number) {
    this.purchasedCurrency = purchasedCurrency;
    this.purchasedAmount = purchasedAmount;
    this.soldCurrency = soldCurrency;
    this.soldAmount = soldAmount;
  }
}
