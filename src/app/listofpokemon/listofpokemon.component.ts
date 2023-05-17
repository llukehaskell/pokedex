import { Component, OnInit } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-listofpokemon',
  templateUrl: './listofpokemon.component.html',
  styleUrls: ['./listofpokemon.component.css']
})
export class ListofpokemonComponent implements OnInit{
  //pokemons:PokemonComponent = [];

  constructor(pokeapi: PokeapiService) {
    // pokeapi.callAPI(1);
    pokeapi.getPokemons(1, 9); //inclusive
  }
  
  
  
  ngOnInit(): void { }

}
