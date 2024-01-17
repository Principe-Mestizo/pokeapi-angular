import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon-details.inteface';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { PokemonEvolution } from '../../interfaces/pokemon-evolution.interface';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.sass']
})
export class PokemonInfoComponent implements OnInit {

  public pokemon?: Pokemon;
  public errorMessage: string = ''
  public evolutions: PokemonEvolution[] = []; 

  constructor( 
    private servicePokemon: PokemonService,
    private activatedRoute: ActivatedRoute,
    private router:Router


  ) {}
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.servicePokemon.searchPokemonByCode(id))
      )
      .subscribe( pokemon => {
        if (!pokemon) {
          return this.router.navigateByUrl('')
        }
        return this.pokemon = pokemon

        console.log(pokemon);
        
      })
    
  }


  searchByEvolutionPokemon( id: number) :void{

    this.servicePokemon.getPokemonEvolution( id )
      .subscribe( (evolucion: PokemonEvolution) => {
        this.evolutions = [evolucion]
        console.log(evolucion);
        
      })
  }


}
