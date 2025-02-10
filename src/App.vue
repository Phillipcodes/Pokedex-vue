<template lang="">
    
   <HeaderComponent></HeaderComponent>
<div class="tag"></div>

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
        font-family: 'Helvetica';
    }
    .tag {
        clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
        background-color: #FFFAFA;
        height: 30px;
        width: 55px;
    }
    
</style>