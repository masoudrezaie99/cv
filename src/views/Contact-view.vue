<template>
    <div class="contact-info">
        <infobox infotext="+989127712038" class="fa fa-phone"/>
        <infobox infotext="masoudrezaie1999@gmail.com" class="fa fa-envelope"/>
        <infobox infotext="Tehran, Iran" class="fa fa-map-marker"/>
    </div>
</template>

<script>
import infobox from '../components/infobox-cp.vue'
    export default {
        components:{
            infobox
        }
    }
</script>

<style scoped>
.contact-info{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
}

@media screen and (max-width:768px) {
  .contact-info{
    flex-direction: column;
  }

}
</style>