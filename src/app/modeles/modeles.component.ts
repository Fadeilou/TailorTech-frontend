import { Component } from '@angular/core';

@Component({
  selector: 'app-modeles',
  templateUrl: './modeles.component.html',
  styleUrls: ['./modeles.component.css']
})
export class ModelesComponent {
  

  types = [
    { name: 'Dress', checked: false },
    { name: 'Shirt', checked: false },
    // ... other types ...
  ];

  occasions = [
      { name: 'Casual', checked: false },
      // ... other occasions ...
  ];

  styles = [
      { name: 'Modern', checked: false },
      // ... other styles ...
  ];

  lengths = [
      { name: 'Short', checked: false },
      // ... other lengths ...
  ];

  cuts = [
      { name: 'Slim', checked: false },
      // ... other cuts ...
  ];

  necklines = [
      { name: 'Round neck', checked: false },
      // ... other necklines ...
  ];

  sleeves = [
      { name: 'Sleeveless', checked: false },
      // ... other sleeves ...
  ];

  patterns = [
      { name: 'Solid', checked: false },
      // ... other patterns ...
  ];

  decorations = [
      { name: 'With lace', checked: false },
      // ... other decorations ...
  ];

  closures = [
      { name: 'Buttons', checked: false },
      // ... other closures ...
  ];

  pockets = [
      { name: 'With pockets', checked: false },
      // ... other types of pockets ...
  ];

    
  seasons = [
      { name: 'Été', checked: false },
      // ... autres saisons ...
    ];

  modeles = [
    {
      name: 'Robe Bohème',
      image: './../../../assets/img/images.jpeg',
      type: 'Robe',
      occasion: 'Casual',
      style: 'Bohème',
      longueur: 'Long',
      coupe: 'Ample',
      encolure: 'V',
      manches: 'Courtes',
      motif: 'Imprimé',
      decorations: 'Avec dentelle',
      fermeture: 'Boutons',
      poches: 'Sans poches',
      saison: 'Été'
    },
    {
      name: 'Costume formel',
      image: './../../../assets/img/images.jpeg',
      type: 'Costume',
      occasion: 'Mariage',
      style: 'Moderne',
      longueur: 'Long',
      coupe: 'Slim',
      encolure: 'Col montant',
      manches: 'Longues',
      motif: 'Uni',
      decorations: 'Sans décorations',
      fermeture: 'Boutons',
      poches: 'Avec poches',
      saison: 'Automne'
    },
    {
      name: 'Chemise de bureau',
      image: './../../../assets/img/images.jpeg',
      type: 'Chemise',
      occasion: 'Bureau',
      style: 'Traditionnel',
      longueur: 'Moyen',
      coupe: 'Regular',
      encolure: 'Col rond',
      manches: 'Longues',
      motif: 'Rayé',
      decorations: 'Sans décorations',
      fermeture: 'Boutons',
      poches: 'Avec poches',
      saison: 'Printemps'
    },
    {
      name: 'Pantalon sport',
      image: './../../../assets/img/images.jpeg',
      type: 'Pantalon',
      occasion: 'Sport',
      style: 'Casual',
      longueur: 'Long',
      coupe: 'Ample',
      encolure: 'N/A',
      manches: 'N/A',
      motif: 'Uni',
      decorations: 'Sans décorations',
      fermeture: 'Lacets',
      poches: 'Avec poches',
      saison: 'Hiver'
    },
  ];
  

  filteredModels: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.filter();
  }

  filter() {
    let typesSelectionnes = this.types.filter(t => t.checked).map(t => t.name);
    if (typesSelectionnes.length) {
      this.filteredModels = this.modeles.filter(m => typesSelectionnes.includes(m.type));
    } else {
      this.filteredModels = this.modeles;
    }
  }
}
