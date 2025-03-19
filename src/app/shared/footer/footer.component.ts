import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WHATSAPP_LINK, INSTAGRAM_LINK } from '@src/app/core/const/contact';
import { PrefixPathPipe } from '@src/app/core/pipes/prefix-path.pipe';

@Component({
  selector: 'app-footer',
  imports: [RouterModule, PrefixPathPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  WHATSAPP_LINK = WHATSAPP_LINK;
  INSTAGRAM_LINK = INSTAGRAM_LINK;
}
