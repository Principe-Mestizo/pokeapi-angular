import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokemonByTypeComponent } from './pages/pokemon-by-type/pokemon-by-type.component';
import { PokemonByNameComponent } from './pages/pokemon-by-name/pokemon-by-name.component';
import { PokemonInfoComponent } from './pages/pokemon-info/pokemon-info.component';

const routes: Routes = [
  {
    path: 'pokemon',
    component: PokemonComponent
  },
  {
    path: 'by-type',
    component: PokemonByTypeComponent
  },
  {

    path: 'by-name',
    component: PokemonByNameComponent
  },
  {
    path: 'pokemon/:id',
    component: PokemonInfoComponent
  },
  {
    path: '**',
    redirectTo: 'pokemon'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokeapiRoutingModule { }
