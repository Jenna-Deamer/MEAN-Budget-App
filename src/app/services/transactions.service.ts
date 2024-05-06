import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { transition } from '@angular/animations';

@Injectable({
  providedIn: 'root',
  //Angular will create a single instance of this service for the entire application at root level.
})
export class TransactionsService {
  constructor(private http: HttpClient) {}
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
    return this.http.post(`${this.serverUrl}/api/transactions`, transaction);
  }
  // GET a single transaction by ID
  getTransactionById(transactionId: string) {
    return this.http.get(`${this.serverUrl}/api/transactions/${transactionId}`);
  }

  //PUT
  updateTransaction(transaction: any) {
    console.log('Transaction Update service called');

    return this.http.put(
      `${this.serverUrl}/api/transactions/${transaction._id}`,
      transaction
    );
  }

  //DELETE
  deleteTransaction(_id: string) {
    console.log('Delete service called');
    return this.http.delete(`${this.serverUrl}/api/transactions/${_id}`);
  }
}
