import { Component, Input } from '@angular/core';
import { CurrencyService } from '../services/currency.service';
import { Observable } from 'rxjs';
import { CurrencyFormData } from '../modules/currency-form-data.model';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {

  resultValue: number | string;
  inputValue: number;

  @Input()
  firstSelectValue: string = 'EUR';

  @Input()
  lastSelectValue: string = 'EUR';

  isFirstInputTriggered: boolean;
  isLastInputTriggered: boolean;

  constructor(private currencyService : CurrencyService) {}

  onFirstInputChange(currencyFormData: CurrencyFormData) {
    this.resultValue = '';
    this.isFirstInputTriggered = currencyFormData.isFirstInputTriggered;
    this.isLastInputTriggered = !this.isFirstInputTriggered;
    this.firstSelectValue = currencyFormData.selectedCurrency;
    this.inputValue = currencyFormData.inputValue;
    this.currencyService
    .getResult(this.firstSelectValue, this.lastSelectValue, this.inputValue)
    .subscribe((queryResult) => {
      this.resultValue = queryResult.result.toPrecision(4);
    });
  }

  onSecondInputChange(currencyFormData: CurrencyFormData) {
    this.resultValue = '';
    this.isFirstInputTriggered = currencyFormData.isFirstInputTriggered;
    this.isLastInputTriggered = !this.isFirstInputTriggered;
    this.lastSelectValue = currencyFormData.selectedCurrency;
    this.inputValue = currencyFormData.inputValue;
    this.currencyService
    .getResult(this.lastSelectValue, this.firstSelectValue, this.inputValue)
    .subscribe((queryResult) => {
      this.resultValue = queryResult.result.toPrecision(4);
    });
  }
}
