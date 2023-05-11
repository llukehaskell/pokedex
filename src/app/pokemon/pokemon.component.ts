import { Component, Inject } from '@angular/core';

export enum poketype {
  none = 0,
  normal = 1,
  fire = 2,
  water = 3,
  grass = 4,
  electric = 5,
  ice = 6,
  fighting = 7,
  poison = 8,
  ground = 9,
  flying = 10,
  psychic = 11,
  bug = 12,
  rock = 13,
  ghost = 14,
  dragon = 15,
  dark = 16,
  steel = 17,
  fairy = 18
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
  ) {} //note @Inject syntax for types

  //setters
  setName(name: string) {this.name = name;}
  setIdx(idx: number) {this.idx = idx;}
  setTypeA(typea: poketype) {this.typea = typea;}
  setTypeB(typeb: poketype) {this.typeb = typeb;}


}
