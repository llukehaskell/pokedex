import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timeout } from 'rxjs';
import { PokemonComponent } from './pokemon/pokemon.component';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private pokelist: PokemonComponent[] = [];
  constructor(private http: HttpClient) { } //idk why http is special and needs to be initialized here but ok
    
  getPokemons(idxStart: number, idxEnd: number) {
    for (let i = idxStart; i < (idxEnd + 1); ++i) {
      this.callAPI(i);
    }
    return this.pokelist;
  }
  
  callAPI(x: number) {
    this.http.get<JSON>('https://pokeapi.co/api/v2/pokemon/' + x).subscribe((res) => {
      let data: any = res;
      let tmpmon: PokemonComponent = new PokemonComponent; // new PokeComp is needed here for class vars & methods to exist
      
      //all of these don't seem to care they're supposed to be a certain type, theyll just be anything if u want. weird
      tmpmon.setIdx(+(data.id));
      tmpmon.setName(String(data.name));
      tmpmon.setTypeA(data.types[0].type.name); 
      if (Object.keys(data.types).length == 2) {
        tmpmon.setTypeB(data.types[1].type.name);
      }
      
      this.pokelist.push(tmpmon);
      // console.log(this.pokelist);
    });
  }
}
