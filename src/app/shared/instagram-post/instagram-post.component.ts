import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  Renderer2,
  inject,
} from '@angular/core';
import { WindowService } from '@src/app/core/services/window/window.service';

@Component({
  selector: 'app-instagram-post',
  imports: [],
  templateUrl: './instagram-post.component.html',
  styleUrl: './instagram-post.component.scss',
})
export class InstagramPostComponent implements OnInit, AfterViewInit {
  private renderer = inject(Renderer2);
  private _windowRef = inject(WindowService);
  @Input() postId: string = '';
  postUrl: string = '';

  ngOnInit(): void {
    this.postUrl = `https://www.instagram.com/reel/${this.postId}/?utm_source=ig_embed&amp;utm_campaign=loading`;
  }

  ngAfterViewInit(): void {
    this.loadInstagramScript();
  }

  private loadInstagramScript() {
    const windowRef = this._windowRef.nativeWindow;
    if (windowRef) {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process(); // Procesa los embeds si ya se cargó el script
      } else {
        const script = this.renderer.createElement('script');
        const blockquoteWrapper = document.querySelector(
          `.blockquote-wrapper-${this.postId}`
        );
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        this.renderer.appendChild(blockquoteWrapper, script);
      }
    }
  }
}
