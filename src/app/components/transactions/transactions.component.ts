import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgFor,DatePipe} from '@angular/common';

//service for api calls
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [NgFor,DatePipe,RouterOutlet, RouterLink, RouterLinkActive],
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
  
  //runs every time component instantiates
  ngOnInit(): void{
    this.getTransactions();
  }

}
