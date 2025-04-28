import { Component } from '@angular/core';
import { Projet } from '../../../models/projet.model';
import { ProjetService } from '../../../services/projet.service';

@Component({
  selector: 'app-projet-list',
  standalone: false,
  templateUrl: './projet-list.component.html',
  styleUrl: './projet-list.component.scss'
})
export class ProjetListComponent {
  projets: Projet[] = [];
  isLoading: boolean = false;

  constructor(private projetService: ProjetService) {}

  ngOnInit(): void {
    this.loadProjets();
  }

  loadProjets(): void {
    this.isLoading = true;
    this.projetService.getAllProjets().subscribe({
      next: (data) => {
        this.projets = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur chargement projets', err);
        this.isLoading = false;
      }
    });
  }

  deleteProjet(id: string | undefined): void {
    if (!id) return;

    this.projetService.deleteProjet(id).subscribe({
      next: () => {
        this.projets = this.projets.filter(p => p.id !== id);
      },
      error: (err) => console.error('Erreur suppression projet', err)
    });
  }
}
