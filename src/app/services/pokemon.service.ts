import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://tyradex.vercel.app/api/v1/gen/1';

  async fetchPokemonList(): Promise<any> {
  const result = await fetch(this.apiUrl)
  return result.json()

//a vous de jouer
  }
}
