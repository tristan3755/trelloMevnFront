import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')

let button=document.querySelector('.buttonSignIn')
let formSign=document.querySelector('.formSignUp')
let cross=document.querySelector('.cross')
 button.addEventListener('click',()=>{
    formSign.style.display="flex"
 })
 cross.addEventListener('click',()=>{
    formSign.style.display="none"
 })
console.log(button)