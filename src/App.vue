<template lang="">
    
   <HeaderComponent></HeaderComponent>
    <PokeCard></PokeCard>

</template>
<script>
import HeaderComponent from './components/Header.vue';
import PokeCard from './components/PokeCard.vue';
export default {
    name:'app',
    components: {
        HeaderComponent,PokeCard
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