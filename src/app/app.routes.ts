import { Routes } from '@angular/router';
import { authGuard } from './services/auth.guard';
/**Main Components**/
import { HomeComponent } from './components/home/home.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
/**FORMS**/
import { SignupComponent } from './components/forms/signup/signup.component';
import { LoginComponent } from './components/forms/login/login.component';
import { CreateComponent } from './components/forms/create/create.component';
import { EditComponent } from './components/forms/edit/edit.component';
/**Goal Forms**/
import { CreateGoalComponent } from './components/forms/create-goal/create-goal.component';
import { EditGoalComponent } from './components/forms/edit-goal/edit-goal.component';

import { createComponent } from '@angular/core';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent,canActivate: [authGuard] },
    { path: 'transactions', component: TransactionsComponent,canActivate: [authGuard] },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'create', component: CreateComponent ,canActivate: [authGuard]},
    { path: 'edit/:id', component: EditComponent,canActivate: [authGuard] },
    { path: 'create-goal', component: CreateGoalComponent ,canActivate: [authGuard]},
    { path: 'edit-goal/:id', component: EditGoalComponent ,canActivate: [authGuard]}
];
