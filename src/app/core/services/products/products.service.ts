import { Injectable } from '@angular/core';
import {
  PRODUCTS_LIST,
  PRODUCT_CATEGORY,
  PRODUCT_INTERFACE,
  PRODUCT_INTERFACE_DB,
} from '../../const/products';
import { Observable, of } from 'rxjs';
import { parseFriendlyUrl } from '../../../shared/helpers/get-friendly-url';

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

  getProductByFriendlyUrl(url: string): PRODUCT_INTERFACE_DB | undefined {
    const product = PRODUCTS_LIST.find(
      (product) => parseFriendlyUrl(product.name) === url
    );
    if (product) {
      return {
        ...product,
        models: [
          ...product.models.map((prd) => ({
            ...prd,
            images: [
              ...prd.images.map(
                (image) => `${this.folderPaths[product.category]}/${image}`
              ),
            ],
          })),
        ],
      };
    }
    return undefined;
  }

  private getProductsByCategoryMapper(
    category: PRODUCT_CATEGORY
  ): PRODUCT_INTERFACE[] {
    const categoryData: PRODUCT_INTERFACE_DB[] = PRODUCTS_LIST.filter(
      (prd) => prd.category === category
    );
    const uniqueProducts: PRODUCT_INTERFACE[] = Array.from(
      new Map(categoryData.map((prd) => [prd.name, prd])).values()
    ).map((prd, index) => ({
      id: `${index}`,
      ...prd,
      image: `${this.folderPaths[category]}/${prd.image}`,
    }));

    return uniqueProducts;
  }
}
