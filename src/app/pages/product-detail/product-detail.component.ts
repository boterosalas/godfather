import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  PRODUCT_INTERFACE_DB,
  PRODUCT_MODEL,
} from '@src/app/core/const/products';
import { ProductsService } from '@src/app/core/services/products/products.service';
import { PrefixPathPipe } from '../../core/pipes/prefix-path.pipe';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, PrefixPathPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  private _activatedRoute = inject(ActivatedRoute);
  private _productsService = inject(ProductsService);
  currentProduct?: PRODUCT_INTERFACE_DB;
  currentModel?: PRODUCT_MODEL;
  currentImage?: string;

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(({ productPath = '' }) => {
      this.currentProduct =
        this._productsService.getProductByFriendlyUrl(productPath);
      console.log(this.currentProduct);
      if (this.currentProduct) {
        this.setCurrentModel(this.currentProduct.models[0]);
      }
    });
  }

  setCurrentModel(model: PRODUCT_MODEL) {
    console.log(model);
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
