import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestCostumerComponent } from './latest-costumer/latest-costumer.component';
import { CardsComponent } from './cards/cards.component';



@NgModule({
  declarations: [
    LatestCostumerComponent,
    CardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LatestCostumerComponent,
    CardsComponent
  ]
})
export class ComponentsModule { }
