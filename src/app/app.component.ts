import { Component, OnInit } from '@angular/core';
import { ListofpokemonComponent } from './listofpokemon/listofpokemon.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokeapiService } from './pokeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {

  }
}
