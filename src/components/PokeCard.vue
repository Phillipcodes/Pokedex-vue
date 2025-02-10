<template lang="">
    
    <div class=" bg-gray-300 flex items-center justify-center text-black relative rounded-[8px] ">
        <img :src="pokemonForCard.img">
        <div class="tag absolute  right-[-35px] top-[65px]"></div>
        <div class="tag absolute  right-[-35px] top-[95px]"></div>

    </div>
</template>
<script>
export default {
    name: 'PokeCard',
    props: {
    pokemonForCard: Object
  },
  mounted() {
    // Dies wird ausgeführt, sobald die Komponente gemountet ist
    console.log(this.pokemonForCard); // Hier wird der Prop angezeigt
  }
}
</script>
<style lang="scss">
      .tag {
        clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
        background-color: #FFFAFA;
        height: 20px;
        width: 55px;
        position: relative;
    }
    
</style>