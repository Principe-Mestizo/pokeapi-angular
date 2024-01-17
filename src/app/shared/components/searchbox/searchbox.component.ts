import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypePokemon } from 'src/app/pokeapi/interfaces/pokemon.type';
import { PokemonTypes } from 'src/app/pokeapi/interfaces/pokemons-types.inteface';
import { PokemonService } from 'src/app/pokeapi/services/pokemon.service';


@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.sass']
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = ''

  @Output()
  public onValue = new EventEmitter<string>();
  emitValue(value: string): void {
    if (value.trim() !== '') {
      this.onValue.emit(value);
    }
  }


}
