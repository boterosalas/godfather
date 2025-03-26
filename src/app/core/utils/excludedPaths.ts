

export const excludedPaths = [
  '/products/bakery',
  '/products/ovens',
  '/products/display',
];
export const isExcludedPathFromResetScroll = (url: string) => {
  return excludedPaths.some((path) => url.endsWith(path));
};
