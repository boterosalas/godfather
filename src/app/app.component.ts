import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { filter, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HAS_HEADER_PAGES } from './core/const/has-header-pages';
import { FooterComponent } from './shared/footer/footer.component';
import { isExcludedPathFromResetScroll } from './core/utils/excludedPaths';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private _router = inject(Router);
  isPaddingTopSection: boolean = false;

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
        this.isPaddingTopSection = !HAS_HEADER_PAGES.some((path) =>
          event.urlAfterRedirects.startsWith(path)
        );
      });
  }

  resetScroll() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (!isExcludedPathFromResetScroll(event)) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  }
}
