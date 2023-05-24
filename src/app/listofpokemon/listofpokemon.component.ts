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
  upperi = 10;

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
        tmpmon.setTypeA(this.data.types[0].type.name); 
        if (tmpmon.getNumTypes() == 2) {
          tmpmon.setTypeB(this.data.types[1].type.name);
        }
        tmpmon.setSprite(this.data.sprites.front_default);

        // this.assignTypeA(i - 1);
        // this.assignTypeB(i - 1);
        this.pokelist[i - 1] = tmpmon; //i guess this just works with the way i initiallized the "Array" (actually vector?)
        // console.log(this.pokelist);
      })).subscribe();
    }
  }

  // assignTypeA(x: number) {
  //   switch (this.pokelist[x].getTypeA()) {
  //     case "normal" : {this.pokelist[x].setTypeA(poketype.NORMAL); break;}
  //     case "fire" : {this.pokelist[x].setTypeA(poketype.FIRE); break;}
  //     case "water" : {this.pokelist[x].setTypeA(poketype.WATER); break;}
  //     case "grass" : {this.pokelist[x].setTypeA(poketype.GRASS); break;}
  //     case "poison" : {this.pokelist[x].setTypeA(poketype.POISON); break;}
  //     case "flying" : {this.pokelist[x].setTypeA(poketype.FLYING); break;}

  //     default: {this.pokelist[x].setTypeA(poketype.FLYING); break;}
  //   } 
  // }

  // assignTypeB(x: number) {
  //   switch (this.pokelist[x].getTypeB()) {
  //     case "fire" : {this.pokelist[x].setTypeB(poketype.FIRE); break;}
  //     case "water" : {this.pokelist[x].setTypeB(poketype.WATER); break;}
  //     case "grass" : {this.pokelist[x].setTypeB(poketype.GRASS); break;}
  //     case "poison" : {this.pokelist[x].setTypeB(poketype.POISON); break;}
  //     case "flying" : {this.pokelist[x].setTypeB(poketype.FLYING); break;}

  //     default: {this.pokelist[x].setTypeA(poketype.FLYING); break;}
  //   } 
  // }

  tiles: Entry[] = [
    {text: 'sprite', cols: 3, rows: 18},
    {text: 'Types', cols: 4, rows: 3},
    {text: 'height', cols: 4, rows: 3},
    {text: 'idx', cols: 1, rows: 3},
    {text: 'Two', cols: 3, rows: 15},
    {text: 'Three', cols: 6, rows: 15},
  ];
}
