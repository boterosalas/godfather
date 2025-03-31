import { Component, OnInit, inject } from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { filter, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NO_HAS_HEADER_PAGES } from './core/const/has-header-pages';
import { FooterComponent } from './shared/components/footer/footer.component';
import { isExcludedPathFromResetScroll } from './core/utils/excludedPaths';
import { WindowService } from './core/services/window/window.service';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private _windowRef = inject(WindowService);
  private _router = inject(Router);
  isPaddingTopSection: boolean = false;
  prevRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.listenPage();
    this.resetScroll();
  }

  private listenPage() {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map((event) => event as NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.isPaddingTopSection = NO_HAS_HEADER_PAGES.some((path) =>
          event.url.startsWith(path)
        );
      });
  }

  resetScroll() {
    const windowRef = this._windowRef.nativeWindow;
    if (windowRef) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.prevRoute = location.href;
        }
        if (event instanceof NavigationEnd) {
          if (
            !isExcludedPathFromResetScroll(event.url) ||
            (!isExcludedPathFromResetScroll(this.prevRoute) &&
              isExcludedPathFromResetScroll(event.url))
          ) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      });
    }
  }
}
