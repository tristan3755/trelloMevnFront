<template>
  <article class="container">
  </article>
  
   <article class="container container-quotes">
   <p>Organisez votre travail</p>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea consequuntur sunt neque. Reprehenderit aliquam fugit eos, iusto dignissimos libero magni expedita nobis aut nemo voluptas molestias, laboriosam, soluta distinctio facere.</p>
  </article>
  
  <article class="container container-slider">
  </article>
</template>





<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
@mixin center($direction: column, $justify: center) {
  display: flex;
  flex-direction: $direction;
  align-items: center;
  justify-content: $justify;
}
.container{
  @include center($direction: row, $justify: space-evenly); 
  min-height:40vh;
  width: 100%;
  background-image: url('../backGround.jpg');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
.container-quotes{
  background-image: none;
   min-height:60vh;
     @include center($direction: row, $justify: space-evenly); 
     align-items: flex-start;
   p{
     margin-top: 15rem;
       color: white;
     max-width: 600px;
     font-size: 1.5rem;
     font-family: "poppins", sans-serif;
     &:nth-child(1){
font-size: 3rem;
letter-spacing: 4px;
font-weight: 800;
}
   }
}
.container-slider{
    background-image: none;
         @include center($direction: row, $justify:center); 
         min-height: 100vh;
}
</style>