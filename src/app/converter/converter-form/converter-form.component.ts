import { Component, Output, EventEmitter, ViewChild, Input, ElementRef, OnInit } from '@angular/core';
import { CurrencyFormData } from 'src/app/modules/currency-form-data.model';
import { CurrencyListService } from 'src/app/services/currency-list.service';

@Component({
  selector: 'app-converter-form',
  templateUrl: './converter-form.component.html',
  styleUrls: ['./converter-form.component.scss']
})
export class ConverterFormComponent implements OnInit{

  @Input()
  currencyValue: number | string;

  @Input()
  selectValue: string;

  @Input()
  first: boolean;

  @Output()
  onInputChange: EventEmitter<CurrencyFormData> = new EventEmitter<CurrencyFormData>;

  @ViewChild('input')
  currencyInput: ElementRef;

  @ViewChild('select')
  currencySelect: ElementRef;

  currencies: string[];

  constructor(private currenciesListService: CurrencyListService) {}

  ngOnInit() {
    this.currencies = this.currenciesListService.currencies;
  }

  onChange() {
    this.onInputChange.emit({
      isFirstInputTriggered: this.first,
      inputValue: parseFloat(this.currencyInput.nativeElement.value),
      selectedCurrency: this.currencySelect.nativeElement.value
    })
  }

}
