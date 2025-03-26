import { Component } from '@angular/core';
import { HeaderBannerComponent } from '@src/app/shared/components/header-banner/header-banner.component';
import { environment } from '@src/environments/environment';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'app-contact',
  imports: [HeaderBannerComponent, MatTooltipModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  EMAIL = environment.EMAIL;
  PHONE = environment.PHONE;
}
