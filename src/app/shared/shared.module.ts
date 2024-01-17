import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoadingPokemonComponent } from './components/loading-pokemon/loading-pokemon.component';
import { SearchBoxComponent } from './components/searchbox/searchbox.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
 
    SearchBoxComponent,
    LoadingPokemonComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [

    LoadingPokemonComponent,
    SearchBoxComponent,
    LoadingPokemonComponent,
    HomePageComponent
  ]
})
export class SharedModule { }
