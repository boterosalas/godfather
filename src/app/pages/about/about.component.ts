import { AfterViewInit, Component, Renderer2, inject } from '@angular/core';
import { PrefixPathPipe } from '@src/app/core/pipes/prefix-path.pipe';
import { WindowService } from '@src/app/core/services/window/window.service';
import { HeaderBannerComponent } from '@src/app/shared/components/header-banner/header-banner.component';
import { InstagramPostComponent } from '@src/app/shared/components/instagram-post/instagram-post.component';

@Component({
  selector: 'app-about',
  imports: [HeaderBannerComponent, PrefixPathPipe, InstagramPostComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements AfterViewInit {
  private renderer = inject(Renderer2);
  private _windowRef = inject(WindowService);

  ngAfterViewInit(): void {
    // this.loadInstagramScript();
  }

  private loadInstagramScript() {
    const windowRef = this._windowRef.nativeWindow;
    if (windowRef) {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process(); // Procesa los embeds si ya se cargó el script
      } else {
        const script = this.renderer.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        this.renderer.appendChild(document.body, script);
      }
    }
  }
}
