import { Component } from '@angular/core';
import { laptopAndComputers, mobileAndGadgets } from 'src/app/data/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  categoryTitle = 'Please Select a Category'

  mobileAndGadgets = mobileAndGadgets
  laptopAndComputers = laptopAndComputers

  onCategoryClick(categoryTitle: string){
    this.categoryTitle = categoryTitle
  }

}
