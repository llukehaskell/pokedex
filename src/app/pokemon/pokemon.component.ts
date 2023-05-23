import { Component, Inject } from '@angular/core';

//i think this is prolly useless, might have to make it a class but at that point idrc i can just store the types as strings
export enum poketype {
  NONE =      '#FFFFFF', //  0
  NORMAL =    '#A8A77A', //  1
  FIRE =      '#EE8130', //  2
  WATER =     '#6390F0', //  3
  GRASS =     '#7AC74C', //  4
  ELECTRIC =  '#F7D02C', //  5
  ICE =       '#96D9D6', //  6
  FIGHTING =  '#C22E28', //  7
  POISON =    '#A33EA1', //  8
  GROUND =    '#E2BF65', //  9
  FLYING =    '#A98FF3', // 10
  PSYCHIC =   '#F95587', // 11
  BUG =       '#A6B91A', // 12
  ROCK =      '#B6A136', // 13
  GHOST =     '#735797', // 14
  DRAGON =    '#6F35FC', // 15
  DARK =      '#705746', // 16
  STEEL =     '#B7B7CE', // 17
  FAIRY =     '#D685AD', // 18
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
    @Inject(poketype) private typeB = poketype.NONE,
    @Inject(String) private sprite = "https://curie.pnnl.gov/sites/default/files/default_images/default-image_0.jpeg",
  ) { } //note @Inject syntax for types

  //setters
  public setName(name: string) {this.name = name;}
  public setIdx(idx: number) {this.idx = idx;}
  public setNumTypes(numTypes: number) {this.numTypes = numTypes;}
  public setTypeA(typea: poketype) {this.typeA = typea;}
  public setTypeB(typeb: poketype) {this.typeB = typeb;}
  public setSprite(sprite: string) {this.sprite = sprite;}

  //getters
  public getName() {return this.name;}
  public getIdx() {return this.idx;}
  public getNumTypes() {return this.numTypes;}
  public getTypeA() {return this.typeA;}
  public getTypeB() {return this.typeB;}
  public getSprite() {return this.sprite;}
}
