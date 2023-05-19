import { Component, Inject } from '@angular/core';

//i think this is prolly useless, might have to make it a class but at that point idrc i can just store the types as strings
export enum poketype {
  "none" = 0,
  "normal" = 1,
  "fire" = 2,
  "water" = 3,
  "grass" = 4,
  "electric" = 5,
  "ice" = 6,
  "fighting" = 7,
  "poison" = 8,
  "ground" = 9,
  "flying" = 10,
  "psychic" = 11,
  "bug" = 12,
  "rock" = 13,
  "ghost" = 14,
  "dragon" = 15,
  "dark" = 16,
  "steel" = 17,
  "fairy" = 18
} //idk if export is bad here or not but idk how other files are gonna know
  //what a poketype is

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  constructor(
    @Inject(String) private name: string = "mantiquatro", 
    @Inject(Number) private idx: number = 9999,  
    @Inject(poketype) private typea = poketype.none,
    @Inject(poketype) private typeb = poketype.none
  ) { } //note @Inject syntax for types

  //setters
  public setName(name: string) {this.name = name;}
  public setIdx(idx: number) {this.idx = idx;}
  public setTypeA(typea: poketype) {this.typea = typea;}
  public setTypeB(typeb: poketype) {this.typeb = typeb;}

  //getters
  public getName() {return this.name;}
  public getIdx() {return this.idx;}
  public getTypeA() {return this.typea;}
  public getTypeB() {return this.typeb;}
}
