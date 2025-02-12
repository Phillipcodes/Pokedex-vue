<template lang="">
  <HeaderComponent></HeaderComponent>
 <button @click="preloadNextPokemonBatch()"> fdfdf</button>
  <div class="p-[32px] flex gap-12 flex-wrap">
    <PokeCard class="flex-1 h-[218px]  flex-grow  flex-shrink-0 sm:basis-[48%] md:basis-[30%] lg:basis-[22%]" v-if="currentPokemon.length > 0" v-for="pokemon in currentPokemon" :key="pokemon.name" :pokemonForCard="pokemon">{{ pokemon.name }}></PokeCard>
   
  </div>
</template>
<script>
import HeaderComponent from "./components/Header.vue";
import PokeCard from "./components/PokeCard.vue";
export default {
  name: "app",
  components: {
    HeaderComponent,
    PokeCard,
  },

  data() {
    return {
      BASEURL: "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0",
      pokemonList: [],
      fullLoadedPokemon: [],
      currentPokemon: []
    };
  },
  methods: {
    async fetchPokemonData() {
      const response = await fetch(this.BASEURL);
      const pokeData = await response.json();
      this.pokemonList = pokeData.results;
      console.log(this.pokemons);
      await this.preloadNextPokemonBatch();
    },


    async preloadNextPokemonBatch() {
  // Nächste Pokémon aus pokemonList nehmen und ins bufferArray schieben
  const nextBatch = this.pokemonList.splice(0, 10); // Nächste 10 Pokémon
  for (let pokemon of nextBatch) {
    const response = await fetch(pokemon.url);
    const fullPokemonData = await response.json();
    const transformedPokemonData = {
      id: fullPokemonData.id,
      name: fullPokemonData.name,
      img: fullPokemonData.sprites.other.dream_world.front_default,
    };
    this.currentPokemon.push(transformedPokemonData);  // In bufferArray speichern
    console.log(this.pokemonList);
    
  }
},

    async fullLoadPokemon() {
      for (let i = 0; i < 8 ; i++) {
        const getPokemonUrl = this.pokemonList[i].url;
        const response = await fetch(getPokemonUrl);
        const fullPokemonData = await response.json();
        const transformedPokemonData = {
          id: fullPokemonData.id,
          name: fullPokemonData.name,
          height: fullPokemonData.height,
          weight: fullPokemonData.weight,
          moves: fullPokemonData.moves,
          img: fullPokemonData.sprites.other.dream_world.front_default,
        };
        this.fullLoadedPokemon.push(transformedPokemonData);
        console.log(fullPokemonData);
      }
    },
  },
  mounted() {
    this.fetchPokemonData();
  },
};
</script>
<style lang="scss">
body {
  
  margin: 0;
  background: #2b292c;
  color: white;
  font-family: "Helvetica";
}
</style>
