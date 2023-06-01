import { Component, OnInit, HostListener } from '@angular/core';
import { PokemonComponent, poketype } from '../pokemon/pokemon.component';
import { PokeapiService } from '../pokeapi.service';
import { tap } from 'rxjs';

export interface Entry {
  cols: number;
  rows: number;
}

let MAX_NUM_OF_POKEMON = 1010;

@Component({
  selector: 'app-listofpokemon',
  templateUrl: './listofpokemon.component.html',
  styleUrls: ['./listofpokemon.component.css']
})
export class ListofpokemonComponent implements OnInit{
  data: any = {};// "= {}" gets rid of the console undefined errors
  public pokelist = new Array<any>(0);
  public startingIndex = 1;
  public nextPokeToAdd = 1;
  public loadingIcon = false;
  
  constructor(private pokeapi: PokeapiService) { }
  
  ngOnInit(): void {
    this.reloadList(String(this.startingIndex));
  }
  
  addPokemonToList(loweri: number, upperi: number) { //upperi inclusive
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

        this.pokelist[i - this.startingIndex] = tmpmon; //i guess this just works with the way i initiallized the "Array" (actually vector?)
        // console.log(this.pokelist);
      })).subscribe();
    }
  } //end of addPokemonToList
   
  reloadList(atThisIdx: string) {
    if (atThisIdx == "") { //so it still works if the input field is empty (default to 1)
      this.startingIndex = 1;
    } else {
      this.startingIndex = +atThisIdx;
    }

    this.pokelist = []; //clear pokelist
    
    if (this.startingIndex > (MAX_NUM_OF_POKEMON - 19)) { //failsafe to not bombard the api for pokemon that don't exist
      this.startingIndex = MAX_NUM_OF_POKEMON - 19;
    }
    this.addPokemonToList(this.startingIndex, this.startingIndex + 19); //upperi inclusive
    this.nextPokeToAdd = this.startingIndex + 20;
  }

  @HostListener("window:scroll", []) // weird syntax
  onScroll() {
    if /*reached the bottom*/ ((window.innerHeight + window.scrollY) >= document.body.scrollHeight
      && this.nextPokeToAdd < 1010) {
      this.loadingIcon = true;
      this.addPokemonToList(this.nextPokeToAdd, this.nextPokeToAdd + 19);
      this.nextPokeToAdd += 20;
      this.loadingIcon = false;
    }
  }
  
  tiles: Entry[] = [
    {cols: 11, rows: 3}, //name
    {cols: 9, rows: 3},  //types
    {cols: 4, rows: 3},  //index
    {cols: 11, rows: 16}, //sprite
    {cols: 13, rows: 16},  //stats
  ];
}
