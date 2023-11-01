import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-modele',
  templateUrl: './detail-modele.component.html',
  styleUrls: ['./detail-modele.component.css']
})
export class DetailModeleComponent {
  selectedTissu: number = 0;  // Pour stocker l'ID du tissu sélectionné


  modele = {
      nom: 'Robe Bohème',
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
      saison: 'Été',
      prix: 25
    };

    // Exemple de données pour les tissus
  tissus = [
    { id: 1, nom: 'Tissu beaucoup A', image: './../../../assets/img/tissu.jpg' },
    { id: 2, nom: 'Tissu beaucoup A B', image: './../../../assets/img/tissu.jpg' },
    { id: 3, nom: 'Tissu beaucoup A C', image: './../../../assets/img/tissu.jpg' },
    { id: 4, nom: 'Tissu beaucoup A A', image: './../../../assets/img/tissu.jpg' },
    { id: 5, nom: 'Tissu B', image: './../../../assets/img/tissu.jpg' },
    { id: 6, nom: 'Tissu C', image: './../../../assets/img/tissu.jpg' },
    { id: 7, nom: 'Tissu beaucoup A C', image: './../../../assets/img/tissu.jpg' },
    { id: 8, nom: 'Tissu beaucoup A A', image: './../../../assets/img/tissu.jpg' },
    { id: 9, nom: 'Tissu B', image: './../../../assets/img/tissu.jpg' },
    { id: 10, nom: 'Tissu C', image: './../../../assets/img/tissu.jpg' },
    
    
    // Ajoutez d'autres options de tissu selon vos besoins
  ];

  
  
    
  constructor() { }

  ngOnInit(): void {
  }

  ajouterAuPanier() {
    // Votre code pour ajouter au panier
    if(this.selectedTissu) {
      console.log('Tissu sélectionné:', this.selectedTissu);
      // Vous pouvez maintenant utiliser l'ID du tissu sélectionné pour effectuer d'autres actions, par exemple, ajouter l'article au panier avec le tissu choisi.
    } else {
      console.warn('Aucun tissu n\'a été sélectionné.');
    }
  }

  personnaliser(): void {
    // Logique pour personnaliser le modèle
    console.log('Personnalisation de:', this.modele.nom);
  }

}
