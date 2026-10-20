import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Accessoire } from '../model/accessoire.model';
import { AccessoireService } from '../services/accessoire.service';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recherche-par-nom.component.html',
  styles: ``
})
export class RechercheParNomComponent implements OnInit {
  allAccessoires!: Accessoire[];
  accessoires!: Accessoire[];

  constructor(private accessoireService: AccessoireService) { }

  ngOnInit() {
    this.allAccessoires = this.accessoireService.listeAccessoires();
    this.accessoires = this.allAccessoires;
  }

  onKeyUp(filterText: string) {
    this.accessoires = this.allAccessoires.filter(a =>
      a.nomAccessoire?.toLowerCase().includes(filterText.toLowerCase()));
  }
}
