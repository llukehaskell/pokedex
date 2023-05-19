import { Component, OnInit } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-listofpokemon',
  templateUrl: './listofpokemon.component.html',
  styleUrls: ['./listofpokemon.component.css']
})
export class ListofpokemonComponent implements OnInit{
  public pokelist: PokemonComponent[] = [];

  constructor(pokeapi: PokeapiService) {
    this.pokelist = pokeapi.getPokemons(1, 9); //inclusive
    console.log(this.pokelist);
  }
  
  ngOnInit(): void { 
  }
}
