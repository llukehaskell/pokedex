import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonComponent } from './pokemon/pokemon.component';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) { }

  
  getPokemons(idxStart: number, idxEnd: number) {
    let tmp: PokemonComponent;
    // let returnArray: PokemonComponent = [];
  
    for (let i = idxStart; i < idxEnd; ++i) {
      console.log(this.callAPI(i));
    }
  }
  
  callAPI(x: number) {
    this.http.get('https://pokeapi.co/api/v2/pokemon-species/' + x).subscribe((data) => {
      console.log(data.toString());
    });
  }

  // async getPokemons(idxStart: number, idxEnd: number) {

  //   let tmp: PokemonComponent;
  //   let returnArray: PokemonComponent = [];

  //   for (let i = idxStart; i < idxEnd; ++i) {
  //     let url = "https://pokeapi.co/api/v2/pokemon-species/" + i;
  //     let data = this.http.get(url);

  //     tmp.setName();
  //     returnArray[i] = data;
  //   }
  // }
}
