import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputTaskComponent } from './components/input-task/input-task.component';
import { ListTaskComponent } from './components/list-task/list-task.component';

const routes: Routes = [
  { path: 'ajouter-tache', component: InputTaskComponent },
  { path: 'liste-taches', component: ListTaskComponent },
  { path: '', redirectTo: 'liste-taches', pathMatch: 'full' }, // Redirection par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
