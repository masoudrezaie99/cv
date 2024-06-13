<template>
    <div class="card animatepop">
    <i :="$attrs" class="card-icon"></i>
    <p>{{ infotext }}</p>
  </div>
</template>

<script>
    export default {
        name:'infobox-cp',

        data(){
            return{
                

            }
        },

        props:{
            infotext:String,
            
        },
        inheritAttrs:false,
    }
</script>

<style scoped>
.card{
  background: #35557e;
  padding: 0 20px;
  margin: 0 10px;
  width: calc(33% - 20px);
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
  border-radius: 7px;
  -webkit-box-shadow: 10px 10px 25px -3px rgb(2 4 6);
    -moz-box-shadow: 10px 10px 25px -3px rgb(2 4 6);
    box-shadow: 10px 10px 25px -3px rgb(2 4 6);
}

.card-icon{
  font-size: 28px;
  background: #00ffc3;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px !important;
  border-radius: 50%;
  transition: 0.3s linear;
}

.card:hover .card-icon{
  background: none;
  color: #00ffc3;
  transform: scale(1.6);
}

.card p{
  margin-top: 20px;
  font-weight: 300;
  letter-spacing: 2px;
  max-height: 0;
  opacity: 0;
  transition: 0.3s linear;
}

.card:hover p{
  max-height: 40px;
  opacity: 1;
}


@media screen and (max-width:768px) {
  .card{
    width: 100%;
    max-width: 300px;
    margin: 10px 0;
  }
}

</style>