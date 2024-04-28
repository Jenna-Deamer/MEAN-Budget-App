import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

//add service & required dependency for server api calls
import { TransactionsService } from './services/transactions.service';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), TransactionsService,provideHttpClient()]
};
