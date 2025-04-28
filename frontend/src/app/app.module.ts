import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTaskComponent } from './components/input-task/input-task.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { ProjetFormComponent } from './components/projet/projet-form/projet-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTaskComponent,
    ListTaskComponent,
    ProjetFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
