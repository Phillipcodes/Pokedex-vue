<template lang="">
  <HeaderComponent></HeaderComponent>
  <div class="p-[32px]">
    <PokeCard></PokeCard>
    <div v-if="pokemonList.length > 0" v-for="pokemon in fullLoadedPokemon" :key="pokemon.name">{{ pokemon.name }}</div>
    <div v-else>Loading...</div>
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
    };
  },
  methods: {
    async fetchPokemonData() {
      const response = await fetch(this.BASEURL);
      const pokeData = await response.json();
      this.pokemonList = pokeData.results;
      console.log(this.pokemons);
      await this.fullLoadPokemon();
    },

    async fullLoadPokemon() {
      for (let i = 0; i < 20; i++) {
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
        console.log(this.fullLoadedPokemon);
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
