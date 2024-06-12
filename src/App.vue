<template>
  <NavbarCp/>
  
  <RouterView/>

  <FooterCp/>
</template>

<script>
import NavbarCp from './components/Navbar-cp.vue';

import FooterCp from './components/Footer-cp.vue';





export default {
  name: 'App',
 


  components: {
    NavbarCp,

    FooterCp
  },



}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: 0.3s;
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
body{
  background-color: rgba(30, 45, 63, .72);

;
}

#app{
  background-color: #1e2d40;
  overflow:hidden;
  box-shadow: 10px 10px 25px -3px rgb(2, 4, 6);
  
}



/* Extra small devices (phones, 567px and down) */
@media only screen and (max-width: 567px) {
  #app{

padding: 5px 20px;
}
}
    
/* Small devices (portrait tablets and large phones, 567px and up) */
@media only screen and (min-width: 567px) {
  #app{

        padding: 5px 20px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  #app{
        margin: 15px;
        padding: 5px 20px;
        border-radius: 40px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  #app{
        margin: 30px;
        padding: 10px 20px;
        border-radius: 40px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  body{
    padding: 0px 120px;
  }
  
  #app{
        margin: 30px;
        padding: 10px 40px;
        border-radius: 40px;
  }
}


</style>
