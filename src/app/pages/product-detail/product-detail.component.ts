import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
  PRODUCT_CATEGORY,
  PRODUCT_INTERFACE_DB,
  PRODUCT_MODEL,
} from '@src/app/core/const/products';
import { ProductsService } from '@src/app/core/services/products/products.service';
import { PrefixPathPipe } from '../../core/pipes/prefix-path.pipe';
import { ProductsCarouselComponent } from '@src/app/shared/components/products-carousel/products-carousel.component';
import { generateWhatsAppLink } from '@src/app/shared/helpers/generate-whatsapp-link';

@Component({
  selector: 'app-product-detail',
  imports: [
    CommonModule,
    PrefixPathPipe,
    ProductsCarouselComponent,
    RouterModule,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  private _activatedRoute = inject(ActivatedRoute);
  private _router = inject(Router);
  private _productsService = inject(ProductsService);
  generateWhatsAppLink = generateWhatsAppLink;
  currentProduct?: PRODUCT_INTERFACE_DB;
  currentModel?: PRODUCT_MODEL;
  currentImage?: string;
  showProduct: boolean = true;

  categoriesPath = {
    [PRODUCT_CATEGORY.BAKERY_EQUIPMENT]: '/products/bakery',
    [PRODUCT_CATEGORY.FOOD_DISPLAY]: '/products/display',
    [PRODUCT_CATEGORY.OVENS]: '/products/ovens',
  };

  ngOnInit(): void {
    this.routeListener();
  }

  routeListener() {
    this._activatedRoute.params.subscribe(({ productPath = '' }) => {
      this.showProduct = false;
      this.currentProduct =
        this._productsService.getProductByFriendlyUrl(productPath);
      if (this.currentProduct) {
        this.setCurrentModel(this.currentProduct.models[0]);
      } else {
        this._router.navigateByUrl('/products');
      }
      setTimeout(() => {
        this.showProduct = true;
      }, 0);
    });
  }

  setCurrentModel(model: PRODUCT_MODEL) {
    this.currentModel = model;
    this.currentImage = model!.images[0];
  }

  selectImage(image: string) {
    this.currentImage = image;
  }

  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = '/godfather/images/no-image.jpg';
  }
}
