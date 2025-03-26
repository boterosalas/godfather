import { Component, OnInit, inject } from '@angular/core';
import { ProductCardComponent } from '@src/app/shared/components/product-card/product-card.component';
import {
  PRODUCT_CATEGORY,
  PRODUCT_INTERFACE,
} from '@src/app/core/const/products';
import { ProductsService } from '@src/app/core/services/products/products.service';

@Component({
  selector: 'app-bakery',
  imports: [ProductCardComponent],
  providers: [ProductsService],
  templateUrl: './bakery.component.html',
  styleUrl: './bakery.component.scss',
})
export class BakeryComponent implements OnInit {
  private productsService = inject(ProductsService);
  private bakeryCategory = PRODUCT_CATEGORY.BAKERY_EQUIPMENT;
  productList: PRODUCT_INTERFACE[] = [];

  ngOnInit(): void {
    this.productsService
      .getProductsByCategory(this.bakeryCategory)
      .subscribe((data) => {
        this.productList = data;
      });
  }
}
