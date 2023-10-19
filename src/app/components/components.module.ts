import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestCostumerComponent } from './latest-costumer/latest-costumer.component';



@NgModule({
  declarations: [
    LatestCostumerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LatestCostumerComponent
  ]
})
export class ComponentsModule { }
