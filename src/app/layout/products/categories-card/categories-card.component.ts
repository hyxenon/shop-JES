import { Component, Output, EventEmitter } from '@angular/core';
import { categories } from 'src/app/data/Product';

@Component({
  selector: 'app-categories-card',
  templateUrl: './categories-card.component.html',
  styleUrls: ['./categories-card.component.scss']
})
export class CategoriesCardComponent {
  @Output() categoryClick = new EventEmitter<string>()
  categories = categories

  onCategoryClick(categoryName: string){
    this.categoryClick.emit(categoryName)
  }
}
