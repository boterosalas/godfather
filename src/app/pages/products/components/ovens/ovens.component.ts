import { Component, OnInit, inject } from '@angular/core';
import {
  PRODUCT_CATEGORY,
  PRODUCT_INTERFACE,
} from '@src/app/core/const/products';
import { ProductsService } from '@src/app/core/services/products/products.service';
import { ProductCardComponent } from '@src/app/shared/product-card/product-card.component';

@Component({
  selector: 'app-ovens',
  imports: [ProductCardComponent],
  templateUrl: './ovens.component.html',
  styleUrl: './ovens.component.scss',
})
export class OvensComponent implements OnInit {
  private productsService = inject(ProductsService);
  private restaurantCategory = PRODUCT_CATEGORY.RESTAURANT_EQUIPMENT;
  productList: PRODUCT_INTERFACE[] = [];

  ngOnInit(): void {
    this.productsService
      .getProductsByCategory(this.restaurantCategory)
      .subscribe((data) => {
        this.productList = data;
      });
  }
}
