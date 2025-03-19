import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PrefixPathPipe } from '@src/app/core/pipes/prefix-path.pipe';

@Component({
  selector: 'app-header-banner',
  imports: [CommonModule, PrefixPathPipe],
  templateUrl: './header-banner.component.html',
  styleUrl: './header-banner.component.scss',
})
export class HeaderBannerComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() htmlTitle: string = '';
}
