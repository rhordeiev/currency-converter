import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) {
  }

  getResult(from: string, to: string, amount: number): Observable<any> {
    return this.http.get(
      `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, 
      {
        headers: {'apikey' : '8k4N5W9mknSGQUk7YzuYntAkFlWwQVMT'}
      }
    );
  }

}
