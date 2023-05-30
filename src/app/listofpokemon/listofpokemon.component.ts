import { Component, OnInit, HostListener } from '@angular/core';
import { PokemonComponent, poketype } from '../pokemon/pokemon.component';
import { PokeapiService } from '../pokeapi.service';
import { tap } from 'rxjs';
import { MatGridListModule } from '@angular/material/grid-list';

export interface Entry {
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-listofpokemon',
  templateUrl: './listofpokemon.component.html',
  styleUrls: ['./listofpokemon.component.css']
})
export class ListofpokemonComponent implements OnInit{
  data: any = {};// "= {}" gets rid of the console undefined errors
  public pokelist = new Array<any>(0);
  public nextPokeToAdd = 1;
  
  constructor(private pokeapi: PokeapiService) { }
  
  ngOnInit(): void {
    this.addPokemonToList(1,20);
    this.nextPokeToAdd = 21;
  }
  
  addPokemonToList(loweri: number, upperi: number) {
    for (let i = loweri; i <= upperi; ++i) {
      this.pokeapi.getPokemons(i).pipe(tap((res) => {
        this.data = res;
        let tmpmon: PokemonComponent = new PokemonComponent; // new PokeComp is needed here for class vars & methods to exist
        //all of these don't seem to care they're supposed to be a certain type, theyll just be anything if u want. weird
        tmpmon.setIdx(+(this.data.id));
        tmpmon.setName(String(this.data.name));
        tmpmon.setNumTypes(Object.keys(this.data.types).length);

        tmpmon.setTypeA((<any>poketype)[this.data.types[0].type.name]); //this is some silly syntax lol   
        
        if (tmpmon.getNumTypes() == 2) {
          tmpmon.setTypeB((<any>poketype)[this.data.types[1].type.name]);
        }
        else { //this is a little hacky but im just using it to get the color.
          tmpmon.setTypeB((<any>poketype)[this.data.types[0].type.name]);
        }
        tmpmon.setSprite(this.data.sprites.front_default);

        for (let s = 0; s < 6; ++s) {
          tmpmon.setStat(this.data.stats[s].base_stat, s);
        }

        this.pokelist[i - 1] = tmpmon; //i guess this just works with the way i initiallized the "Array" (actually vector?)
        console.log(this.pokelist);
      })).subscribe();
    }
  } //end of addPokemonToList
  
  // loadMorePokemon() {
    //   this.addPokemonToList(this.nextPokeToAdd, this.nextPokeToAdd + 19);
    //   this.nextPokeToAdd += 20;
    // }
    
    @HostListener("window:scroll", []) // weird syntax
    onScroll() {
      if /*reached the bottom*/ ((window.innerHeight + window.scrollY) >= document.body.scrollHeight
       && this.nextPokeToAdd < 1010) {
        this.addPokemonToList(this.nextPokeToAdd, this.nextPokeToAdd + 19);
        this.nextPokeToAdd += 20;
      }
  }
  // setTimeout(() => {}, 5000);
  
  tiles: Entry[] = [
    {cols: 12, rows: 18}, //sprite
    {cols: 8, rows: 3},  //types
    {cols: 4, rows: 3},  //index
    {cols: 12, rows: 15},  //stats
  ];
}
