import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Accessoire } from '../model/accessoire.model';
import { SearchFilterPipe } from '../search-filter.pipe';
import { AccessoireService } from '../services/accessoire.service';

@Component({
  selector: 'app-accessoires',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, SearchFilterPipe],
  templateUrl: './accessoires.component.html',
  styleUrl: './accessoires.component.css'
})
export class AccessoiresComponent {
  accessoires: Accessoire[]; // un tableau d'Accessoire
  searchTerm!: string;

  constructor(private accessoireService: AccessoireService) {
    this.accessoires = accessoireService.listeAccessoires();
  }

  supprimerAccessoire(a: Accessoire) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.accessoireService.supprimerAccessoire(a);
  }
}
