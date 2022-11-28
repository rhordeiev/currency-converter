import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyListService {

  private _currencies: string[] = ['EUR', 'USD', 'UAH'];

  constructor() { }

  get currencies(): string[] {
    return this._currencies;
  }
}
