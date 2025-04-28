import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputTaskComponent } from './components/input-task/input-task.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { ProjetFormComponent } from './components/projet/projet-form/projet-form.component';
import { ProjetListComponent } from './components/projet/projet-list/projet-list.component';
import { AjouterTaskComponent } from './components/ajouter-task/ajouter-task.component';

const routes: Routes = [
  { path: 'ajouter-tache', component: AjouterTaskComponent },
  { path: 'liste-taches', component: ListTaskComponent },
  { path: 'ajouter-projet', component: ProjetFormComponent },
  { path: 'liste-projets', component: ProjetListComponent },
  { path: '', redirectTo: 'liste-projets', pathMatch: 'full' },
  { path: '', redirectTo: 'liste-taches', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
