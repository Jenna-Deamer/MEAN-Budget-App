import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }

  //GET
  getTransactions() {
    //use http to call express API
    return this.http.get('http://localhost:3000/api/transactions');
  }
}
