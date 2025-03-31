import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HeaderBannerComponent } from '@src/app/shared/components/header-banner/header-banner.component';

@Component({
  selector: 'app-products',
  imports: [
    MatTabsModule,
    MatButtonModule,
    RouterModule,
    HeaderBannerComponent,
    CommonModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent {
  title = 'app';
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Bakery Equipment',
        link: 'bakery',
        index: 0,
      },
      {
        label: 'Display Cases',
        link: 'display',
        index: 1,
      },
      {
        label: 'Ovens',
        link: 'ovens',
        index: 2,
      },
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find((tab) => tab.link === '.' + this.router.url)
      );
    });
  }
}
