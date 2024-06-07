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
  }
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
  /* background-color: #00ffc3; */
  background-color: rgb(122, 122, 122);
}

#app{
  background-color: #1e2d40;
  overflow:hidden;
}

@media only screen and (min-width: 768px) {
  #app{
    margin: 30px 300px;
    padding: 10px 40px;
    border-radius: 40px;
  }
}

@media only screen and (max-width: 768px) {
  #app{
  width: 100%;
  height: 100%;
  padding: 10px 20px;

}
}


</style>
