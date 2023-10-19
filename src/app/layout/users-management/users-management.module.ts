import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersManagementComponent } from './users-management.component';
import { UsersManagementRoutingModule } from './users-management-routing.module';
import { MyAccountComponent } from './my-account/my-account.component';
import { NotificationComponent } from './notification/notification.component';
import { PurchaseSellComponent } from './purchase-sell/purchase-sell.component';
import { AddressesComponent } from './my-account/addresses/addresses.component';
import { BankCardsComponent } from './my-account/bank-cards/bank-cards.component';
import { ChangePasswordComponent } from './my-account/change-password/change-password.component';
import { ProfileComponent } from './my-account/profile/profile.component';



@NgModule({
  declarations: [
    UsersManagementComponent,
    MyAccountComponent,
    NotificationComponent,
    PurchaseSellComponent,
    AddressesComponent,
    BankCardsComponent,
    ChangePasswordComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UsersManagementRoutingModule
  ]
})
export class UsersManagementModule { }
