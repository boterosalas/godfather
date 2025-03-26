import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface Category {
  title: string;
  description: string;
  cta: string;
  link: string;
  image: string;
}

@Component({
  selector: 'app-category-card',
  imports: [RouterModule],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss',
})
export class CategoryCardComponent {
  @Input() category: Category = {
    title: '',
    description: '',
    cta: '',
    link: '',
    image: ''
  };
}
