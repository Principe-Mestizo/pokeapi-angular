import { Component } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon-details.inteface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-by-name',
  templateUrl: './pokemon-by-name.component.html',
  styleUrls: ['./pokemon-by-name.component.sass']
})
export class PokemonByNameComponent {
  public pokemons: Pokemon[] = [];
  public isLoading: boolean = false;
  public pokemonNotFount: boolean = false;
  placeholder: string = 'Busca tu pokemon'
  

  constructor( private servicePokemon: PokemonService
   ) {

  }

  searchbyNamePokemon(name: string) {
    const formattedName = name.toLowerCase().replace(/\s+/g, '');
    this.pokemons = [];
    this.isLoading = true;  
    this.pokemonNotFount = false;

    this.servicePokemon.searchPokemonByName(formattedName).subscribe(
      (pokemon: Pokemon) => {
        this.pokemons = [pokemon];
        this.isLoading = false;
        
      },
      (error) => {
        console.error('Error al buscar Pokémon:', error);
        this.isLoading = false;
        this.pokemonNotFount= true;


      }
    );
  }

}
