import { Component, Inject } from '@angular/core';

//i think this is prolly useless, might have to make it a class but at that point idrc i can just store the types as strings
export enum poketype {
  NONE = 0,
  NORMAL = 1,
  FIRE = 2,
  WATER = 3,
  GRASS = 4,
  ELECTRIC = 5,
  ICE = 6,
  FIGHTING = 7,
  POISON = 8,
  GROUND = 9,
  FLYING = 10,
  PSYCHIC = 11,
  BUG = 12,
  ROCK = 13,
  GHOST = 14,
  DRAGON = 15,
  DARK = 16,
  STEEL = 17,
  FAIRY = 18
} 

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  constructor(
    @Inject(String) private name: string = "mantiquatro", 
    @Inject(Number) private idx: number = 9999,
    @Inject(Number) private numTypes = 2,
    @Inject(poketype) private typeA = poketype.NONE,
    @Inject(poketype) private typeB = poketype.NONE
  ) { } //note @Inject syntax for types

  //setters
  public setName(name: string) {this.name = name;}
  public setIdx(idx: number) {this.idx = idx;}
  public setNumTypes(numTypes: number) {this.numTypes = numTypes;}
  public setTypeA(typea: poketype) {this.typeA = typea;}
  public setTypeB(typeb: poketype) {this.typeB = typeb;}

  //getters
  public getName() {return this.name;}
  public getIdx() {return this.idx;}
  public getNumTypes() {return this.numTypes;}
  public getTypeA() {return this.typeA;}
  public getTypeB() {return this.typeB;}
}
