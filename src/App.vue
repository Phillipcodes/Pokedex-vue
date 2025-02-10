<template lang="">
    
   <HeaderComponent></HeaderComponent>
    <div class="p-[32px]">
    <PokeCard></PokeCard>
    <div v-if="pokemons.length > 0">{{pokemons[0].name}}</div>
    <div v-else>Loading...</div>
</div>
</template>
<script>
import HeaderComponent from './components/Header.vue';
import PokeCard from './components/PokeCard.vue';
export default {
    name:'app',
    components: {
        HeaderComponent,PokeCard
    } ,

    data() {
        return {
             BASEURL:'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0',
             pokemons: []
        }
    },
    methods: {
      async fetchPokemonData() {
        const response = await fetch(this.BASEURL);
        const pokeData = await response.json();
        this.pokemons = pokeData.results;
        console.log(this.pokemons);
        
      }
    },
    mounted() {
        this.fetchPokemonData()
    }
}
</script>
<style lang="scss">
     body {
        margin: 0;
        background: #2B292C;
        color: white;
        font-family: 'Helvetica';
    }
  
</style>