import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';
import { CurrencyValuesComponent } from './currency-values/currency-values.component';
import { ConverterFormComponent } from './converter/converter-form/converter-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    CurrencyValuesComponent,
    ConverterFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
