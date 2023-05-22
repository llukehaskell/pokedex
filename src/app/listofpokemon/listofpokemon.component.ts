import { Component, OnInit } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { PokeapiService } from '../pokeapi.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-listofpokemon',
  templateUrl: './listofpokemon.component.html',
  styleUrls: ['./listofpokemon.component.css']
})
export class ListofpokemonComponent implements OnInit{
  data: any = {};// "= {}" gets rid of the console undefined errors
  public pokelist: PokemonComponent[] = [];

  constructor(private pokeapi: PokeapiService) { }
  
  ngOnInit(): void {
    this.pokeapi.getPokemons(1).pipe(tap((res) => {
      this.data = res;
      let tmpmon: PokemonComponent = new PokemonComponent; // new PokeComp is needed here for class vars & methods to exist
      
      //all of these don't seem to care they're supposed to be a certain type, theyll just be anything if u want. weird
      tmpmon.setIdx(+(this.data.id));
      tmpmon.setName(String(this.data.name));
      tmpmon.setTypeA(this.data.types[0].type.name); 
      if (Object.keys(this.data.types).length == 2) {
        tmpmon.setTypeB(this.data.types[1].type.name);
      }
      
      this.pokelist.push(tmpmon);
    })).subscribe();
  }
}
