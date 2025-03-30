import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NO_HAS_HEADER_PAGES } from '@src/app/core/const/has-header-pages';
import { PrefixPathPipe } from '@src/app/core/pipes/prefix-path.pipe';
import { WindowService } from '@src/app/core/services/window/window.service';
import { fromEvent, Subject } from 'rxjs';
import { throttleTime, map, takeUntil, filter } from 'rxjs/operators';
import { menuItems } from './menu-items';

@Component({
  selector: 'app-navbar',
  imports: [ReactiveFormsModule, RouterModule, CommonModule, PrefixPathPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {
  private _windowRef = inject(WindowService);
  private _router = inject(Router);
  private destroy$ = new Subject<void>(); // 👈 Definir destroy$
  isBackgroundNavbarSection: boolean = false;
  searchControl = new FormControl(null);
  @ViewChild('navbarToggler') navbarToggler: ElementRef | any;
  menuItems = menuItems;

  ngOnInit(): void {
    this.listenPage();
  }

  ngAfterViewInit(): void {
    this.resizeListener();
  }
  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }

  private navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  private resizeListener() {
    const windowRef = this._windowRef.nativeWindow;
    if (windowRef) {
      fromEvent(windowRef, 'scroll')
        .pipe(
          throttleTime(50), // Limita la cantidad de eventos emitidos cada 200ms
          map(() => windowRef.scrollY), // Obtiene la posición vertical del scroll
          takeUntil(this.destroy$)
        )
        .subscribe(() => {
          const menu = document.getElementById('principal-menu');
          const banner = document.getElementById('header-banner');
          const principalMenuLogo = document.getElementById(
            'principal-menu__logo'
          )!;
          if (banner) {
            const { bottom: bannerBottom } = banner.getBoundingClientRect();
            if (bannerBottom > 70) {
              menu?.classList.remove('navbar--background');
              menu?.classList.add('bg-transparent');
              principalMenuLogo.style.height = '90px';
            } else {
              menu?.classList.add('navbar--background');
              menu?.classList.remove('bg-transparent');
              principalMenuLogo.style.height = '60px';
            }
          } else {
            const html = document.querySelector('html');
            const { top: htmlTop } = html!.getBoundingClientRect();
            if (htmlTop < -80) {
              principalMenuLogo.style.height = '60px';
            } else {
              principalMenuLogo.style.height = '90px';
            }
          }
        });
      dispatchEvent(new Event('scroll'));
    }
  }

  private listenPage() {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map((event) => event as NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.isBackgroundNavbarSection = NO_HAS_HEADER_PAGES.some((path) =>
          event.url.startsWith(path)
        );
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(); // 👈 Emitir valor para completar los observables
    this.destroy$.complete();
  }
}
