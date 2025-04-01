import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  PRODUCTS_LIST,
  PRODUCT_INTERFACE_DB,
} from '@src/app/core/const/products';
import { ProductCardComponent } from '@src/app/shared/components/product-card/product-card.component';

@Component({
  selector: 'app-search-result',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.scss',
})
export class SearchResultComponent implements OnInit {
  private _activatedRoute = inject(ActivatedRoute);
  listProducts: PRODUCT_INTERFACE_DB[] = [];

  ngOnInit(): void {
    this.routeListener();
  }

  routeListener() {
    this._activatedRoute.params.subscribe(({ search = '' }) => {
      this.listProducts = this.getItemsBySearch(search);
      console.log(this.listProducts);
    });
  }

  getItemsBySearch(searchText: string) {
    if (!searchText.trim()) return []; // Si la búsqueda está vacía, devolver array vacío
    const searchWords = searchText.toLowerCase().split(/\s+/); // Divide el texto por espacios y lo convierte a minúsculas
    return PRODUCTS_LIST.filter((product) => {
      return searchWords.some((word) => {
        // Buscar en el nombre y categoría
        if (
          product.name.toLowerCase().includes(word) ||
          product.category.toLowerCase().includes(word)
        ) {
          return true;
        }
        // Buscar en los modelos
        return product.models.some((model) => {
          if (
            model.model.toLowerCase().includes(word) ||
            (model.availableIn &&
              model.availableIn.some((a) => a.toLowerCase().includes(word))) ||
            (model.dimensions &&
              model.dimensions.some((d) => d.toLowerCase().includes(word))) ||
            (model.features &&
              model.features.some((f) => f.toLowerCase().includes(word)))
          ) {
            return true;
          }
          // Buscar en altDimensions si existen
          return model.altDimensions?.some(
            (alt) =>
              alt.name.toLowerCase().includes(word) ||
              alt.dimensions.some((d) => d.toLowerCase().includes(word))
          );
        });
      });
    });
  }
}
