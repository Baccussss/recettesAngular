import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecettesListComponent } from './recettes-list/recettes-list.component';
import { RecetteDetailsComponent } from './recette-details/recette-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecettesListComponent,
    RecetteDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
