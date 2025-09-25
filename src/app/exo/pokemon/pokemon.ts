import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.html',
  styleUrls: ['./pokemon.css']
})


export class Pokemon {
  pokemons: any[] = [];
  constructor(private pokemonService:PokemonService){}

  async ngOnInit () {
    this.pokemonService.fetchPokemonList().then(data => {
    this.pokemons = data;
    }).catch((err) => {

      console.log("une erreur est survenu lors de la récupération");
    });
  }



}
