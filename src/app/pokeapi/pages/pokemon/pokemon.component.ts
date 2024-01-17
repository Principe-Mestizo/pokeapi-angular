import { Component, } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon-details.inteface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.sass']
})
export class PokemonComponent  {
  public pokemon: Pokemon[] = [];

  placeholder: string = 'Busca tu pokemon'

 
}
