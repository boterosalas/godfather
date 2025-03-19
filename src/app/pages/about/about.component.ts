import { Component } from '@angular/core';
import { HeaderBannerComponent } from '@src/app/shared/header-banner/header-banner.component';

@Component({
  selector: 'app-about',
  imports: [HeaderBannerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
