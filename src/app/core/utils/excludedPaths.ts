import { NavigationEnd } from '@angular/router';

export const isExcludedPathFromResetScroll = (event: NavigationEnd) => {
  const excludedPaths = [
    '/products/bakery',
    '/products/restaurant',
    '/products/display',
  ];
  return excludedPaths.some((path) => event.url.endsWith(path));
};
