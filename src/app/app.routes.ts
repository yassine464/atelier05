import { Routes } from '@angular/router';
import { AccessoiresComponent } from './accessoires/accessoires.component';
import { AddAccessoireComponent } from './add-accessoire/add-accessoire.component';
import { UpdateAccessoireComponent } from './update-accessoire/update-accessoire.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

export const routes: Routes = [
  { path: "accessoires", component: AccessoiresComponent },
  { path: "add-accessoire", component: AddAccessoireComponent },
  { path: "updateAccessoire/:id", component: UpdateAccessoireComponent },
  { path: "rechercheParMarque", component: RechercheParMarqueComponent },
  { path: "rechercheParNom", component: RechercheParNomComponent },
  { path: "", redirectTo: "accessoires", pathMatch: "full" }
];
