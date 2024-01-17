import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetPokemonResponse } from '../interfaces/pokemon.interface';
import { Observable, catchError, delay, forkJoin, map, of, pipe } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon-details.inteface';
import { PokemonTypes } from '../interfaces/pokemons-types.inteface';
import { PokemonEvolution } from '../interfaces/pokemon-evolution.interface';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private API_URL: string = 'https://pokeapi.co/api/v2/pokemon?'
  private API_URL_CODE: string = 'https://pokeapi.co/api/v2/pokemon'
  private API_SEARCH_TYPE: string = 'https://pokeapi.co/api/v2/type'
  private API_URL_EVOLUTION: string = 'https://pokeapi.co/api/v2/evolution-chain'


  constructor(private http:HttpClient) { }

  getPokemonRequest(limit: number, offset: number):Observable<GetPokemonResponse> {
    return this.http.get<GetPokemonResponse>(`${this.API_URL}limit=${limit}&offset=${offset}` )
    
  }
  
  gePokemonData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }



  getPokemonEvolution(id: number ): Observable<PokemonEvolution>{
    return this.http.get<PokemonEvolution>(`${this.API_URL_EVOLUTION}/${id}/`)
      .pipe(
        delay(1000)
      )
  }


  searchPokemonByCode(id: string): Observable<Pokemon | null> {
    const url = `${this.API_URL_CODE}/${id}`;
    return this.http.get<Pokemon>(url).pipe(
      delay(1000),
      catchError(error => of(null))
    );
  }
  

  

  searchPokemonByName(name: string): Observable<Pokemon>{
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;   
    
    return this.http.get<Pokemon>(apiUrl)
    .pipe(
      delay(1000)
    );
    
  }

  searchByTypePokemon(name: string): Observable<PokemonTypes> {
    return this.http.get<PokemonTypes>(`${this.API_SEARCH_TYPE}/${name}`)
      .pipe(
        delay(1000)
      );
  }
  
 
}
