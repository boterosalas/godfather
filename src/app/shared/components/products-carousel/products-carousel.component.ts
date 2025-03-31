import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import {
  PRODUCTS_LIST,
  PRODUCT_INTERFACE_DB,
} from '@src/app/core/const/products';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Router } from '@angular/router';
import { parseFriendlyUrl } from '../../helpers/get-friendly-url';

@Component({
  selector: 'app-products-carousel',
  imports: [CommonModule, CarouselModule, ProductCardComponent],
  templateUrl: './products-carousel.component.html',
  styleUrl: './products-carousel.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ProductsCarouselComponent implements OnInit {
  private _router = inject(Router);
  private startX = 0;
  private startY = 0;
  @Input() currentProduct?: PRODUCT_INTERFACE_DB;
  suggestedProducts: PRODUCT_INTERFACE_DB[] = [];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    margin: 10,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1.3,
      },
      400: {
        items: 2.3,
      },
      740: {
        items: 3.3,
      },
      940: {
        items: 4.3,
      },
    },
    nav: true,
  };

  ngOnInit(): void {
    this.getSuggestedProducts();
  }

  getSuggestedProducts() {
    const filteredArray = PRODUCTS_LIST.filter(
      (item) => item.name !== this.currentProduct?.name
    );
    for (let i = filteredArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredArray[i], filteredArray[j]] = [
        filteredArray[j],
        filteredArray[i],
      ];
    }
    this.suggestedProducts = filteredArray.slice(0, 9);
  }

  onMouseDown(event: MouseEvent | TouchEvent): void {
    const clientX =
      (event as MouseEvent).clientX || (event as TouchEvent).touches[0].clientX;
    const clientY =
      (event as MouseEvent).clientY || (event as TouchEvent).touches[0].clientY;
    this.startX = clientX;
    this.startY = clientY;
  }

  onMouseUp(event: MouseEvent | TouchEvent, item: PRODUCT_INTERFACE_DB): void {
    const clientX =
      (event as MouseEvent).clientX ||
      (event as TouchEvent).changedTouches[0].clientX;
    const clientY =
      (event as MouseEvent).clientY ||
      (event as TouchEvent).changedTouches[0].clientY;
    if (
      !(
        Math.abs(clientX - this.startX) > 10 ||
        Math.abs(clientY - this.startY) > 10
      )
    ) {
      this._router.navigate(['/product-detail/', parseFriendlyUrl(item.name)]);
    }
  }
}
