import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListofpokemonComponent } from './listofpokemon/listofpokemon.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokeapiService } from './pokeapi.service';

@NgModule({
  declarations: [
    AppComponent,

    ListofpokemonComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    HttpClientModule
  ],
  providers: [
    PokeapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
