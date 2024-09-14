import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PositionsDashboardComponent } from './positions-dashboard/positions-dashboard.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';

export const routes: Routes = [
  { path: 'dashboard', component: PositionsDashboardComponent },
  { path: 'transaction', component: TransactionFormComponent },
  { path: 'history', component: TransactionHistoryComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
