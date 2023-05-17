import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timeout } from 'rxjs';
import { PokemonComponent } from './pokemon/pokemon.component';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private data:any;
  constructor(private http: HttpClient) { }

  
  getPokemons(idxStart: number, idxEnd: number) {
    let tmp: PokemonComponent;
    // let returnArray: PokemonComponent = [];
  
    for (let i = idxStart; i < (idxEnd + 1); ++i) {
      this.callAPI(i);
      
    }
  }
  
  callAPI(x: number) {
    return this.http.get<JSON>('https://pokeapi.co/api/v2/pokemon-species/' + x).subscribe((res) => {
      this.data = res;
      
      console.log(this.data.name);
    });
  }
}
