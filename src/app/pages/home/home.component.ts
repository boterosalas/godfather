import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { HeaderBannerComponent } from '@src/app/shared/components/header-banner/header-banner.component';
import { InstagramPostComponent } from '@src/app/shared/components/instagram-post/instagram-post.component';
import {
  Category,
  CategoryCardComponent,
} from '@src/app/shared/components/category-card/category-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    HeaderBannerComponent,
    InstagramPostComponent,
    CategoryCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title =
    'Welcome to<br /><span class="text-warning">Godfather Food Machinery</span>';
  categories: Category[] = [
    {
      title: 'Bakery Equipment',
      description: 'Boost efficiency with professional bakery tools',
      cta: 'Explore our bakery equipment',
      link: '/products/bakery',
      image: '/images/bakery-category.png',
    },
    {
      title: 'Display Cases',
      description: 'Showcase your products and attract more customers',
      cta: 'Discover our display solutions',
      link: '/products/display',
      image: '/images/display-category.png',
    },
    {
      title: 'Ovens',
      description: 'Achieve perfect baking results with high-performance ovens',
      cta: 'Find your ideal oven',
      link: '/products/ovens',
      image: '/images/ovens-category.png',
    },
  ];
}
