import { Routes } from '@angular/router';
/**Main Components**/
import { HomeComponent } from './components/home/home.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
/**FORMS**/
import { SignupComponent } from './components/forms/signup/signup.component';
import { LoginComponent } from './components/forms/login/login.component';
import { CreateComponent } from './components/forms/create/create.component';
import { EditComponent } from './components/forms/edit/edit.component';
/**UI-Components**/
import { createComponent } from '@angular/core';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    {path: 'transactions',component: TransactionsComponent},
    {path: 'signup',component: SignupComponent},
    {path: 'login',component: LoginComponent},
    {path: 'create', component: CreateComponent},
    { path: 'edit/:id', component: EditComponent },
];
