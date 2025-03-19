import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { HeaderBannerComponent } from '@src/app/shared/header-banner/header-banner.component';

@Component({
  selector: 'app-home',
  imports: [HeaderBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'Welcome to<br /><span class="text-warning">Godfather Food Machinery</span>'
}
