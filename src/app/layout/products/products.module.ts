import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { CategoriesCardComponent } from './categories-card/categories-card.component';
import { ProductItemCardComponent } from './product-item-card/product-item-card.component';



@NgModule({
  declarations: [
    ProductsComponent,
    CategoriesCardComponent,
    ProductItemCardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
