import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgFor,DatePipe} from '@angular/common';
import { GoalWidgetComponent } from '../ui-components/goal-widget/goal-widget.component';

//service for api calls
import { TransactionsService } from '../../services/transactions.service';
import { transition } from '@angular/animations';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [NgFor,DatePipe,RouterOutlet, RouterLink, RouterLinkActive,GoalWidgetComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
  //inject  service dependency 
  //cant create a transaction object without a service object
  constructor(private service: TransactionsService){}


  TRANSACTIONS: any;

  //call api GET via service,
  // wait for json response then populate TRANSACTIONS var
  getTransactions(): void{
    this.service.getTransactions().subscribe(response =>{
      this.TRANSACTIONS = response;
    })
  }
  

 deleteTransaction(transactionId: string): void {
    //pass transactionId  & confirm with user to delete transaction
    if(confirm('Are you sure you want to delete this transaction?') == true){
      //remove the transaction
      this.service.deleteTransaction(transactionId).subscribe(response =>{
        //re-get transactions to update table view
        this.getTransactions();
        
      });
    }
  }
  //runs every time component instantiates
  ngOnInit(): void{
    this.getTransactions();
  }

}
