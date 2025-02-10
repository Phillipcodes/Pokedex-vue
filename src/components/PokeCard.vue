<template lang="">
  <div class="tag"></div>
</template>
<script>
export default {
    name: 'PokeCard'
}
</script>
<style lang="scss">
      .tag {
        clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
        background-color: #FFFAFA;
        height: 30px;
        width: 55px;
    }
    
</style>