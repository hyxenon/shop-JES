import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersManagementComponent } from './users-management.component';
import { ProfileComponent } from './my-account/profile/profile.component';
import { BankCardsComponent } from './my-account/bank-cards/bank-cards.component';
import { AddressesComponent } from './my-account/addresses/addresses.component';
import { ChangePasswordComponent } from './my-account/change-password/change-password.component';
import { PurchaseSellComponent } from './purchase-sell/purchase-sell.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  {
    path: "",
    component: UsersManagementComponent,

    children: [
      {
        path: '',
        redirectTo: 'profile', pathMatch: 'prefix'
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'bank-cards',
        component: BankCardsComponent
      },
      {
        path: 'address',
        component: AddressesComponent
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent
      },
      {
        path: 'purchase-sell',
        component: PurchaseSellComponent
      },
      {
        path: 'notification',
        component: NotificationComponent
      }
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsersManagementRoutingModule { }
