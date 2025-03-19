import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefixPath',
})
export class PrefixPathPipe implements PipeTransform {
  private readonly basePath = '/godfather';

  transform(value: string): string {
    if (!value) return '';

    // Si la ruta ya tiene el prefijo, no lo añade
    if (value.startsWith(this.basePath) || value.startsWith('http')) {
      return value;
    }

    return `${this.basePath}${value}`;
  }
}
