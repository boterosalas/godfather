import { Injectable } from '@angular/core';
import {
  PRODUCTS_LIST,
  PRODUCT_CATEGORY,
  PRODUCT_INTERFACE,
  PRODUCT_INTERFACE_DB,
} from '../../const/products';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}
  private folderPaths = {
    [PRODUCT_CATEGORY.BAKERY_EQUIPMENT]: 'bakery',
    [PRODUCT_CATEGORY.FOOD_DISPLAY]: 'food-display',
    [PRODUCT_CATEGORY.OVENS]: 'ovens',
  };

  getProductsByCategory(
    category: PRODUCT_CATEGORY
  ): Observable<PRODUCT_INTERFACE[]> {
    return of(this.getProductsByCategoryMapper(category));
  }

  private getProductsByCategoryMapper(
    category: PRODUCT_CATEGORY
  ): PRODUCT_INTERFACE[] {
    const categoryData: PRODUCT_INTERFACE_DB[] = PRODUCTS_LIST.filter(
      (prd) => prd.category === category
    );

    const productsWithImageRoute = categoryData.map((prd, index) => ({
      id: `${index}`,
      ...prd,
      image: `${this.folderPaths[category]}/${prd.image}`,
    }));

    return productsWithImageRoute;
  }
}
