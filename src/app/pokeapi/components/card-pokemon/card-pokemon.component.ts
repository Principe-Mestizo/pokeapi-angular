import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon-details.inteface';
import { PokemonService } from '../../services/pokemon.service';
import { GetPokemonResponse } from '../../interfaces/pokemon.interface';
import { TypePokemon } from '../../interfaces/pokemon.type';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.sass']
})
export class CardPokemonComponent implements OnInit{

  @Input()
  public pokemons: Pokemon[] =  [];
  public page: number = 0;

    constructor(private pokemonService:PokemonService) { }
  ngOnInit(): void {
    this.loadPokemons();

  
  }
  private loadPokemons(): void {
    this.pokemonService.getPokemonRequest(18, this.page * 10)
      .subscribe(
        (response: GetPokemonResponse) => {
   
          this.pokemons = [];

          response.results.forEach((result: { name: string; }) => {
            this.pokemonService.gePokemonData(result.name)
              .subscribe((uniqResponse: any) => {
                this.pokemons.push(uniqResponse);
              });
          });
        },
        (error) => {
          console.error('Error al obtener Pokémon', error);
        }
      );
  }
  nextPage():void{
    this.page += 1; 
    this.loadPokemons(); 
  }


  prevPage():void{
    if (this.page > 0) {
      this.page -= 1;
      this.loadPokemons();
    }
  }


  
    public typeColors: { [key in TypePokemon]: string } = {
      'normal': '#A8A77A',
      'fighting': '#C22E28',
      'flying': '#A98FF3',
      'poison': '#A33EA1',
      'ground': '#E2BF65',
      'rock': '#B6A136',
      'bug': '#A6B91A',
      'ghost': '#735797',
      'steel': '#B7B7CE',
      'fire': '#EE8130',
      'water': '#6390F0',
      'grass': '#7AC74C',
      'electric': '#F7D02C',
      'psychic': '#F95587',
      'ice': '#96D9D6',
      'dragon': '#6F35FC',
      'dark': '#705746',
      'fairy': '#D685AD',
      'unknown': '#FFFFFF',
      'shadow': '#000000'
    };
  
    getTypeColor( pokemon: Pokemon) {

      const primaryType = pokemon.types[0].type.name as TypePokemon;
      return this.typeColors[primaryType];
    }


}
