import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgFor,NgIf,NgClass} from '@angular/common';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//service for api calls
import { TransactionsService } from '../../../services/transactions.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [NgFor,FormsModule,RouterOutlet, RouterLink, RouterLinkActive,NgIf,NgClass],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor(private service: TransactionsService){}

  TRANSACTIONS: any;
  _id: string | undefined;
  name: string | undefined;
  amount: number | undefined;
  category: string | undefined;
  type: string | undefined;
  date: Date | undefined;

  //track form status for displaying error messages
  formInvalid: boolean = false;
  //track if transaction was created
  showSuccessMessage: boolean = false;
  //reset form 
  resetForm(): void {
    // Reset form values
    this.name = undefined;
    this.amount = undefined;
    this.category = undefined;
    this.type = undefined;
    this.date = undefined;
  }


  addTransaction(): void {
    //if false, set FormInvalid to true to display err msg to users.
    if (!this.isValidForm()) {
      console.log('Form is not valid. Cannot submit.');
      this.formInvalid = true; // Set formInvalid to true
      return;
    }
    //create newTransaction object from form values
    let newTransaction = {
      name: this.name,
      amount: this.amount,
      category: this.category,
      type: this.type,
      date: this.date || new Date()
    }

    //send newTransaction to service to api then clear form
    this.service.addTransaction(newTransaction).subscribe(response => {
      //let user know transaction was created
      console.log('Transaction created successfully.');
      console.log(newTransaction);
      //set formInvalid back to false
      this.formInvalid = false;
      //show transaction created message for a short duration.
      this.showSuccessMessage = true; //display msg
      //clear form to allow user to create a new transaction quickly
      this.resetForm();
      //hide successMsg
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 3000); // Wait for 3 seconds before hiding 
      //handle errors
    }, (error) => {
      console.error('Failed to create transaction:', error);
    });
  }

  isValidForm(): boolean {
    //check if any of the form fields are empty
    return !!this.name && !!this.amount && !!this.category && !!this.type && !!this.date;
  // Return true only if all form fields have non-empty values, otherwise return false
  }
}