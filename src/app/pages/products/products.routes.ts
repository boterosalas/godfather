import { Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

export const productsRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'bakery',
        loadComponent: () =>
          import('./components/bakery/bakery.component').then(
            (m) => m.BakeryComponent
          ),
      },
      {
        path: 'display',
        loadComponent: () =>
          import('./components/display/display.component').then(
            (m) => m.DisplayComponent
          ),
      },
      {
        path: 'ovens',
        loadComponent: () =>
          import('./components/ovens/ovens.component').then(
            (m) => m.OvensComponent
          ),
      },
      {
        path: '**',
        redirectTo: 'bakery',
        pathMatch: 'full',
      },
    ],
  },
];
