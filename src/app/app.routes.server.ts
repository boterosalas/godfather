import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'product-detail/:productPath',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      // build an array like [{ id: '1' }, { id: '2' }, { id: '3' }]
      return [{ productPath: '' }];
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
