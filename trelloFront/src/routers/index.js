import {createRouter,createWebHistory} from 'vue-router'
 const routes =[
     {
         path:'/',
         name:'home',
         component:()=>import("../components/landingPage.vue")
     },
     {
        path:'/inscription',
        name:'inscription',
        component:()=>import("../components/formInscription.vue")
    },
    {
        path:'/connexion',
        name:'connexion',
        component:()=>import("../components/connexion.vue")
    },
 ]

export default createRouter({
    history:createWebHistory('/'),
     routes
 })