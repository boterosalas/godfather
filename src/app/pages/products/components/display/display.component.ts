import { Component, OnInit, inject } from '@angular/core';
import {
  PRODUCT_CATEGORY,
  PRODUCT_INTERFACE,
} from '@src/app/core/const/products';
import { ProductsService } from '@src/app/core/services/products/products.service';
import { ProductCardComponent } from '@src/app/shared/components/product-card/product-card.component';

@Component({
  selector: 'app-display',
  imports: [ProductCardComponent],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss',
})
export class DisplayComponent implements OnInit{
  private productsService = inject(ProductsService);
  private displayCategory = PRODUCT_CATEGORY.FOOD_DISPLAY;
  productList: PRODUCT_INTERFACE[] = [];

  ngOnInit(): void {
    this.productsService
      .getProductsByCategory(this.displayCategory)
      .subscribe((data) => {
        this.productList = data;
      });
  }
}
