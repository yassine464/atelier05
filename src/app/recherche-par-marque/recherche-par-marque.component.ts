import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Accessoire } from '../model/accessoire.model';
import { Marque } from '../model/marque.model';
import { AccessoireService } from '../services/accessoire.service';

@Component({
  selector: 'app-recherche-par-marque',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recherche-par-marque.component.html',
  styles: ``
})
export class RechercheParMarqueComponent implements OnInit {
  accessoires!: Accessoire[];
  marques!: Marque[];
  idMarque!: number;

  constructor(private accessoireService: AccessoireService) { }

  ngOnInit() {
    this.marques = this.accessoireService.listeMarques();
    this.accessoires = this.accessoireService.listeAccessoires();
  }

  onChange() {
    this.accessoires = this.accessoireService.rechercherParMarque(this.idMarque);
  }
}
