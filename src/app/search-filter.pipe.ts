import { Pipe, PipeTransform } from '@angular/core';
import { Accessoire } from './model/accessoire.model';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {
  transform(liste: Accessoire[], searchTerm: string): Accessoire[] {
    if (!searchTerm) return liste;
    searchTerm = searchTerm.toLowerCase();
    return liste.filter(a => a.nomAccessoire!.toLowerCase().includes(searchTerm));
  }
}
