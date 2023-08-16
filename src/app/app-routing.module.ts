import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ShoppingDashboardComponent } from './shopping-dashboard/shopping-dashboard.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  
  { path: 'add-user', component: AddUserComponent },
  { path: '', component: ShoppingDashboardComponent },
  { path: 'support', component: SupportComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
