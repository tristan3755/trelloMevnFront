<template >
<form  class="formSignUp" @submit.prevent>
<span class="cross" @click="closeForm"><svg width="100%" height="100%" viewBox="0 0 287 287" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 10L277 276.5" stroke="white" stroke-width="20" stroke-linecap="round"/>
<path d="M276.5 10L9.99999 276.5" stroke="white" stroke-width="20" stroke-linecap="round"/>
</svg>
</span>
<input type="email" required>
<input type="password" required v-model="pass1">
<input type="password" required v-model="pass2">
<button >Inscription</button>
<p class="passwordok" v-if="pass1==pass2&&!!pass1&&!!pass2&&pass1.length>=2">password ok</p>
<p class="passwordKo" v-if="pass1!==pass2||pass2!==pass1">password Ko</p>
<p class="passwordKo" v-if="pass1.length<2||pass2.length<2">password too short</p>
</form>
</template>
<script setup>
import {ref} from 'vue'

let pass1=ref('')
let pass2=ref('')

</script>
<style lang="scss" scoped>
 .formSignUp{
      width: 100%;
      min-height: 100vh;     
      backdrop-filter: blur(50px);    
      position: fixed;
      top: 0;
      z-index: 2;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
   .cross{
      width: 40px;
      height: 40px;
      position: absolute;
      top: 2rem;
      right: 2rem;
   }
   input{
      border-top: none;
      border-left: none;
      border-right: none;
      background-color: transparent;
      width: 30vw;
      border-bottom: solid 1px white;
      height: 100px;
      color:white;
      margin: 2.5rem;
   }
   button{
      width: 200px;
      height: 60px;
      border: solid 1px white;
      background-color: transparent;
      border-radius: 5px;
      color: white;
   }
   .passwordok{
      color: white;
      width: 250px;
      padding: 2rem;
      background-color:#27ae60;
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
   }
   .passwordKo{
       color: white;
      width: 250px;
      padding: 2rem;
      background-color:#c0392b;
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
   }
 }
 
</style>