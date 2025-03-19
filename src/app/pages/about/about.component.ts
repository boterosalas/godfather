import { Component } from '@angular/core';
import { PrefixPathPipe } from '@src/app/core/pipes/prefix-path.pipe';
import { HeaderBannerComponent } from '@src/app/shared/header-banner/header-banner.component';

@Component({
  selector: 'app-about',
  imports: [HeaderBannerComponent, PrefixPathPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
