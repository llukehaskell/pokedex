import { Component, Inject } from '@angular/core';

//i think this is prolly useless, might have to make it a class but at that point idrc i can just store the types as strings
export enum poketype {
  "NONE" =      '#FFFFFF', //  0
  "normal" =    '#A8A77A', //  1
  "fire" =      '#EE8130', //  2
  "water" =     '#6390F0', //  3
  "grass" =     '#7AC74C', //  4
  "electric" =  '#F7D02C', //  5
  "ice" =       '#96D9D6', //  6
  "fighting" =  '#C22E28', //  7
  "poison" =    '#A33EA1', //  8
  "ground" =    '#E2BF65', //  9
  "flying" =    '#A98FF3', // 10
  "psychic" =   '#F95587', // 11
  "bug" =       '#A6B91A', // 12
  "rock" =      '#B6A136', // 13
  "ghost" =     '#735797', // 14
  "dragon" =    '#6F35FC', // 15
  "dark" =      '#705746', // 16
  "steel" =     '#B7B7CE', // 17
  "fairy" =     '#D685AD', // 18
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
    @Inject(Number) private stats = [0, 0, 0, 0, 0, 0], //[hp, atk, def, spatk, spdef, speed]
  ) { } //note @Inject syntax for types

  //setters
  public setName(name: string) {this.name = name;}
  public setIdx(idx: number) {this.idx = idx;}
  public setNumTypes(numTypes: number) {this.numTypes = numTypes;}
  public setTypeA(typea: poketype) {this.typeA = typea;}
  public setTypeB(typeb: poketype) {this.typeB = typeb;}
  public setSprite(sprite: string) {this.sprite = sprite;}
  public setStat(stat: number, i: number) {this.stats[i] = stat;}

  //getters
  public getName() {return this.name;}
  public getIdx() {return this.idx;}
  public getNumTypes() {return this.numTypes;}
  public getTypeA() {return this.typeA;}
  public getTypeB() {return this.typeB;}
  public getNameTypeA() {return Object.keys(poketype)[Object.values(poketype).indexOf(this.typeA)];}
  public getNameTypeB() {return Object.keys(poketype)[Object.values(poketype).indexOf(this.typeB)];}
  public getSprite() {return this.sprite;}
  public getStat(i: number) {return this.stats[i];}
}
