<template>
  <form class="formSignUp" @submit.prevent>
    <a class="cross"
      href="http://localhost:3000"><svg
        width="100%"
        height="100%"
        viewBox="0 0 287 287"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 10L277 276.5"
          stroke="white"
          stroke-width="20"
          stroke-linecap="round"
        />
        <path
          d="M276.5 10L9.99999 276.5"
          stroke="white"
          stroke-width="20"
          stroke-linecap="round"
        />
      </svg>
    </a>
    <input type="email" name="username" required v-model="user" placeholder="votre mail qui servira d'identifiant" />
    <input type="password" name="passeword" required v-model="pass1" placeholder="votre mot de passe" />
    <button @click="submitInscription">Connexion</button>
      <p class="passwordKo" v-if="toggleInscriptionIssues==true">
     problème de connexion
    </p>
  </form>
</template>

<script setup>
import { ref } from "vue";
let user =ref("")
let pass1 = ref("");
let toggleInscriptionIssues = ref(null);
let urlConnexion="http://localhost:4000/users/connexion"

function submitInscription(){
fetch(urlConnexion,{method:'POST',headers:{"Content-Type": "application/json; charset=UTF-8",},body:JSON.stringify({username:user.value,password:pass1.value})})
.then(res=>res.json())
.then(res=>{
  console.log(res.code)
  if(res.code==401){
  toggleInscriptionIssues.value=true
  }else{
  toggleInscriptionIssues.value=false
  }
})
.catch(err=>{
  console.log(err)
})
}

</script>
<style lang="scss" scoped>
.formSignUp {
  width: 100%;
  min-height: 100vh;
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color:#020329;
  animation: fade-in linear forwards 0.5s;
  @keyframes fade-in{
from{
transform: translate(-20vw);
}to{
transform: translate(0vw);
}
  }
  .cross {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
  input {
    border-top: none;
    border-left: none;
    border-right: none;
    background-color: transparent;
    width: 30vw;
    border-bottom: solid 1px white;
    height: 100px;
    color: white;
    margin: 2.5rem;
  }
  button {
    width: 200px;
    height: 60px;
    border: solid 1px white;
    background-color: transparent;
    border-radius: 5px;
    color: white;
  }
    .passwordKo {
    color: white;
    width: 250px;
    padding: 2rem;
    background-color: #c0392b;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }
}
</style>
