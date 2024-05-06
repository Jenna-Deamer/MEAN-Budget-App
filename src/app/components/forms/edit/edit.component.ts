import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { NgIf, NgClass } from '@angular/common';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//service for api calls
import { TransactionsService } from '../../../services/transactions.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterLink, RouterLinkActive, NgIf, NgClass],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})

export class EditComponent {
  //track form status for displaying error messages
  formInvalid: boolean = false;

  constructor(
    private route: ActivatedRoute, // Inject ActivatedRoute
    private service: TransactionsService //inject service dependency 
  ) { }

  transaction: any;

  ngOnInit(): void {
    //get transactionId on initialize
    this.route.params.subscribe(params => {
      const transactionId = params['id'];
      console.log("Transaction Id " + transactionId);
      // get transaction details
      this.getTransaction(transactionId);
    });
  }
 
  // Method to get transaction details
  getTransaction(id: string): void {
    this.service.getTransactionById(id).subscribe(transaction => {
      this.transaction = transaction;
    });
  }
  
  // Method to update transaction
  updateTransaction(): void {
    this.service.updateTransaction(this.transaction).subscribe(
      (response) => {
        console.log('Transaction updated:', response);
      },
      (error) => {
        console.error('Error updating transaction:', error);
      }
    );
  }
  
  //validation handler
  // isValidForm(): boolean {
  //   //check if any of the form fields are empty
  //   return !!this.name && !!this.amount && !!this.category && !!this.type && !!this.date;
  // // Return true only if all form fields have non-empty values, otherwise return false
  // }
}
