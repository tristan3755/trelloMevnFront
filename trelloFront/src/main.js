import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')

let button=document.querySelector('.buttonSignIn')
let formSign=document.querySelector('.formSignUp')
let toogleSignUp=false
 button.addEventListener('click',()=>{
    toogleSignUp=!toogleSignUp
    console.log(toogleSignUp)
    if(toogleSignUp==false){
        formSign.style.display="none"
    }else{
        formSign.classList.add("formDropDown")
    }
 })

console.log(button)