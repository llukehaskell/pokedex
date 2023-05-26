import { Component, OnInit } from '@angular/core';
import { PokemonComponent, poketype } from '../pokemon/pokemon.component';
import { PokeapiService } from '../pokeapi.service';
import { tap } from 'rxjs';
import { MatGridListModule } from '@angular/material/grid-list';

export interface Entry {
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-listofpokemon',
  templateUrl: './listofpokemon.component.html',
  styleUrls: ['./listofpokemon.component.css']
})
export class ListofpokemonComponent implements OnInit{
  data: any = {};// "= {}" gets rid of the console undefined errors
  public pokelist = new Array<any>(0);

  public color = 'lightblue';
  loweri = 1;
  upperi = 11;

  constructor(private pokeapi: PokeapiService) { }
  
  ngOnInit(): void {
    for (let i = this.loweri; i < this.upperi; ++i) {
      this.pokeapi.getPokemons(i).pipe(tap((res) => {
        this.data = res;
        let tmpmon: PokemonComponent = new PokemonComponent; // new PokeComp is needed here for class vars & methods to exist

        //all of these don't seem to care they're supposed to be a certain type, theyll just be anything if u want. weird
        tmpmon.setIdx(+(this.data.id));
        tmpmon.setName(String(this.data.name));
        tmpmon.setNumTypes(Object.keys(this.data.types).length);

        tmpmon.setTypeA((<any>poketype)[this.data.types[0].type.name]); //this is kinda silly        
        
        if (tmpmon.getNumTypes() == 2) {
          tmpmon.setTypeB((<any>poketype)[this.data.types[1].type.name]);
        }
        else { //this is a little hacky but im just using it to get the color.
          tmpmon.setTypeB((<any>poketype)[this.data.types[0].type.name]);
        }
        tmpmon.setSprite(this.data.sprites.front_default);
        this.pokelist[i - 1] = tmpmon; //i guess this just works with the way i initiallized the "Array" (actually vector?)
        // console.log(this.pokelist);
      })).subscribe();
    }
  }

  tiles: Entry[] = [
    {text: 'sprite', cols: 3, rows: 18},
    {text: 'Types', cols: 3, rows: 3},
    {text: 'height', cols: 3, rows: 3},
    {text: 'idx', cols: 1, rows: 3},
    {text: 'Two', cols: 3, rows: 15},
    {text: 'Three', cols: 6, rows: 15},
  ];
}
