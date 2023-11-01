import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByColor'
})
export class FilterByColorPipe implements PipeTransform {

  transform(modeles: any[], selectedColor: string): any[] {
    if (!selectedColor) {
      return modeles;
    }
    return modeles.filter(modele => modele.color === selectedColor);
  }

}
