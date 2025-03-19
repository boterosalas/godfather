import { Component, Input } from '@angular/core';
import {
  PRODUCT_CATEGORY,
  PRODUCT_INTERFACE,
} from '@src/app/core/const/products';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product: PRODUCT_INTERFACE = {
    image: '',
    name: '',
    id: '',
    category: PRODUCT_CATEGORY.BAKERY_EQUIPMENT,
  };
}
