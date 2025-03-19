import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-banner',
  imports: [CommonModule],
  templateUrl: './header-banner.component.html',
  styleUrl: './header-banner.component.scss',
})
export class HeaderBannerComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() htmlTitle: string = '';
}
