import { AfterViewInit, Component, inject } from '@angular/core';
import { WindowService } from '@src/app/core/services/window/window.service';
import { HeaderBannerComponent } from '@src/app/shared/header-banner/header-banner.component';

@Component({
  selector: 'app-contact',
  imports: [HeaderBannerComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements AfterViewInit {
  private _windowRef = inject(WindowService);
  ngAfterViewInit(): void {
    this.loadInstagramScript();
  }

  loadInstagramScript() {
    const windowRef = this._windowRef.nativeWindow;
    if (windowRef) {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    }
  }
}
