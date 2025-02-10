<template lang="">
    
    <div class="rounded-full  size-48 bg-gray-300 flex items-center justify-center text-black relative">
        <div class="w-3/4 h-3/4>">here could stay your ad</div>
        
        <div class="tag absolute  right-[-35px] top-[65px]"></div>
        <div class="tag absolute  right-[-35px] top-[95px]"></div>

    </div>
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
        height: 20px;
        width: 55px;
        position: relative;
    }
    
</style>