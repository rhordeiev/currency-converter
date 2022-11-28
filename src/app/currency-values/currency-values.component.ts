import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';
import { CurrencyListService } from '../services/currency-list.service';
import { Currency } from '../modules/currency.model';

@Component({
  selector: 'app-currency-values',
  templateUrl: './currency-values.component.html',
  styleUrls: ['./currency-values.component.scss'],
})
export class CurrencyValuesComponent implements OnInit{

  currencies: Currency[] = [];

  constructor(private currencyService: CurrencyService, private currenciesListService: CurrencyListService) {}

  ngOnInit() {
    const currenciesListNames: string[] = this.currenciesListService.currencies;
    currenciesListNames
    .filter((currencyName) => currencyName !== 'UAH')
    .forEach((currencyName) => {
      this.currencyService.getResult(currencyName, 'UAH', 1).subscribe((queryResult) => {
        this.currencies.push({
          name: currencyName, 
          value: queryResult.result.toPrecision(4)
        });
      });
    });
  }
}
