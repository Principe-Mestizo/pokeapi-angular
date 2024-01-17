import { Component } from '@angular/core';

import { TypePokemon } from '../../interfaces/pokemon.type';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon-details.inteface';
import { PokemonTypes } from '../../interfaces/pokemons-types.inteface';

@Component({
  selector: 'app-pokemon-by-type',
  templateUrl: './pokemon-by-type.component.html',
  styleUrls: ['./pokemon-by-type.component.sass']
})
export class PokemonByTypeComponent {
  public pokemons:PokemonTypes[] = [];
  public isLoading: boolean = false;
  public mensaje: string = 'Selecione su tipo de pokemon por favor';
  public tipoPokemon: TypePokemon[] = ['normal','fighting','flying','poison','ground','rock','bug','ghost','steel','fire','water','grass','electric','psychic','ice', 'dragon','dark'];
  public selectedPokemon?: TypePokemon;
  constructor( private pokemonService: PokemonService) {}

 
  searchByTypePokemon(type: TypePokemon): void {
    this.selectedPokemon = type
    this.isLoading = true;  
    this.pokemons = [];
    this.mensaje = '';
    this.pokemonService.searchByTypePokemon( type )
      .subscribe( pokemons => {
        console.log(pokemons);
        this.pokemons = [pokemons]
        this.isLoading = false;  
      })

  }

  getIcon(url: string): string {
    const id = this.extractIdFromUrl(url);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }


  private extractIdFromUrl(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }

  
}
