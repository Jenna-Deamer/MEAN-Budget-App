import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { transition } from '@angular/animations';


@Injectable({
  providedIn: 'root'
  //Angular will create a single instance of this service for the entire application at root level.
})
export class TransactionsService {

  constructor(private http: HttpClient) { }
  //set api url class level so all methods share it
  serverUrl: string = environment.serverUrl;
  //GET
  getTransactions() {
    //use http to call express API
    return this.http.get(`${this.serverUrl}/api/transactions`);
  }
  //POST
  addTransaction(transaction: any) {
    //pass url & data we want to submit
    console.log('Transaction Service Called');
    return this.http.post(`${this.serverUrl}/api/transactions`, transaction);
    
  }
}
