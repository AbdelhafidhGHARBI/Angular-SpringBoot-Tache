import { Component, EventEmitter, Output } from '@angular/core';
import { Projet } from '../../../models/projet.model';
import { ProjetService } from '../../../services/projet.service';

@Component({
  selector: 'app-projet-form',
  standalone: false,
  templateUrl: './projet-form.component.html',
  styleUrl: './projet-form.component.scss'
})
export class ProjetFormComponent {
  newProjetName: string = '';
  newProjetDescription: string = '';

  @Output() projetCreated = new EventEmitter<Projet>();

  constructor(private projetService: ProjetService) {}

  createProjet(): void {
    if (!this.newProjetName.trim() || !this.newProjetDescription.trim()) return;

    const newProjet: Projet = {
      name: this.newProjetName,
      description: this.newProjetDescription
    };

    this.projetService.createProjet(newProjet).subscribe({
      next: (projet) => {
        this.projetCreated.emit(projet);
        this.newProjetName = '';
        this.newProjetDescription = '';
      },
      error: (err) => console.error('Erreur lors de la création du projet', err)
    });
  }
}
