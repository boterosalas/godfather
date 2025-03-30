import { Component, Input } from '@angular/core';
import {
  PRODUCT_CATEGORY,
  PRODUCT_INTERFACE,
} from '@src/app/core/const/products';
import { PrefixPathPipe } from '@src/app/core/pipes/prefix-path.pipe';
import { generateWhatsAppLink } from '../../helpers/generate-whatsapp-link';
import { parseFriendlyUrl } from '../../helpers/get-friendly-url';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [PrefixPathPipe, RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  generateWhatsAppLink = generateWhatsAppLink;
  parseFriendlyUrl = parseFriendlyUrl;
  @Input() product: PRODUCT_INTERFACE = {
    image: '',
    name: '',
    id: '',
    models: [],
    category: PRODUCT_CATEGORY.BAKERY_EQUIPMENT,
  };
}
