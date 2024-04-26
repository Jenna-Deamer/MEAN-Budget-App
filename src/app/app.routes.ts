import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: '', component: HomeComponent },
    {path: 'transactions',component: TransactionsComponent},
];
