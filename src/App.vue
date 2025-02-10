<template lang="">
    
   <HeaderComponent></HeaderComponent>
</template>
<script>
import HeaderComponent from './components/Header.vue';
export default {
    name:'app',
    components: {
        HeaderComponent,
    } 
}
</script>
<style lang="scss">
     body {
        margin: 0;
        background: #2B292C;
        color: white;
    }
</style>