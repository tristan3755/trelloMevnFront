<template >
<article  class="formSignUp">
</article>
</template>
<script setup>

</script>
<style lang="scss" scoped>
 article{
    width: 100%;
    min-height: 100vh;     
    backdrop-filter: blur(150px);    
    position: fixed;
    top: 0;
    transform: translateY(-100vh);
 }
 .formDropDown{
    animation:formDropDown linear forwards 0.5s;
 }
 @keyframes formDropDown{
    from{
 transform: translateY(-100vh);
    }to{
 transform: translateY(100vh);
    }
 }
</style>