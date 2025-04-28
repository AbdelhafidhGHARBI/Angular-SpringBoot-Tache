import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projet } from '../models/projet.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private apiUrl = 'http://localhost:9000/api/projets'; 

  constructor(private http: HttpClient) {}

  getAllProjets(): Observable<Projet[]> {
    return this.http.get<Projet[]>(this.apiUrl);
  }

  createProjet(projet: Projet): Observable<Projet> {
    return this.http.post<Projet>(this.apiUrl, projet);
  }

  updateProjet(id: string, projet: Projet): Observable<Projet> {
    return this.http.put<Projet>(`${this.apiUrl}/${id}`, projet);
  }

  deleteProjet(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
