import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

/**FORMS**/
import { SignupComponent } from './forms/signup/signup.component';
import { LoginComponent } from './forms/login/login.component';


export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: '', component: HomeComponent },
    {path: 'transactions',component: TransactionsComponent},
    {path: 'signup',component: SignupComponent},
    {path: 'login',component: LoginComponent},
];
