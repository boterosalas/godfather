import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  PRODUCT_CATEGORY,
  PRODUCT_INTERFACE,
  PRODUCT_INTERFACE_DB,
} from '@src/app/core/const/products';
import { PrefixPathPipe } from '@src/app/core/pipes/prefix-path.pipe';
import { generateWhatsAppLink } from '../../helpers/generate-whatsapp-link';
import { parseFriendlyUrl } from '../../helpers/get-friendly-url';
import { RouterModule } from '@angular/router';
import { getProductImagePath } from '../../helpers/get-product-image-path';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, PrefixPathPipe, RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  generateWhatsAppLink = generateWhatsAppLink;
  parseFriendlyUrl = parseFriendlyUrl;
  getProductImagePath = getProductImagePath;
  @Input() canRedirect: boolean = true;
  @Input() size: 'normal' | 'small' = 'normal';
  @Input() product: PRODUCT_INTERFACE_DB = {
    image: '',
    name: '',
    models: [],
    category: PRODUCT_CATEGORY.BAKERY_EQUIPMENT,
  };

  categoryClasses = {
    [PRODUCT_CATEGORY.BAKERY_EQUIPMENT]: 'bakery',
    [PRODUCT_CATEGORY.FOOD_DISPLAY]: 'display',
    [PRODUCT_CATEGORY.OVENS]: 'ovens',
  }
}
