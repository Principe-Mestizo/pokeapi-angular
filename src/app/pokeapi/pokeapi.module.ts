import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeapiRoutingModule } from './pokeapi-routing.module';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokemonInfoComponent } from './pages/pokemon-info/pokemon-info.component';
import { PokemonByTypeComponent } from './pages/pokemon-by-type/pokemon-by-type.component';
import { PokemonByNameComponent } from './pages/pokemon-by-name/pokemon-by-name.component';

import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CardPokemonComponent,
    PokemonComponent,
    PokemonInfoComponent,
    PokemonByTypeComponent,
    PokemonByNameComponent,

  ],
  imports: [
    CommonModule,
    PokeapiRoutingModule,
    HttpClientModule,
    SharedModule,
    
    
  ],
  exports: [
    CardPokemonComponent,
    PokemonComponent,
    PokemonByNameComponent
  ]
})
export class PokeapiModule { }
