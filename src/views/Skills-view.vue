<template>
    <main>
        <div class="box-container animatepop " v-for="skill in skills" :key="skill.id" ref="skillbox">
            <p>{{ skill.name }}</p>

            <div class="progressbar-container">
      <v-progress-circular :model-value="skill.minVal" :rotate="0" :size="100" :width="15" color="#00ffc3" bg-color="#35557e">
        <template v-slot:default> {{ skill.minVal }} % </template>
      </v-progress-circular>
    </div>
    
        </div>
        
    </main>
    
  </template>

<script>

  import { useTaskStore } from '../stores/taskStore.js'
  import { storeToRefs } from 'pinia'

  export default {
    
   setup(){
    const taskStore = useTaskStore()

    const {skills} = storeToRefs(taskStore)


    return{
        taskStore ,skills
    }



   },



    mounted () {  
        
        this.skills.forEach((element) => {
            
                setInterval(function() {
                    if(element.minVal<element.maxVal){
                element.minVal+=10
                }
                    else{
                        element.minVal=element.maxVal
                    }
            }, 50);
            
            
        });
        


}
        
      
    
    
  }
</script>

<style lang="scss" scoped>

main{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}


.box-container{
    min-width: 300px;
    padding: 20px;
     width: fit-content;
     display: flex;
     flex-direction: column;
     justify-content:space-between;
     align-items: center;
     border: 1px solid teal;
    border-radius: 7px;
    margin: 5px;
    cursor: pointer;
    &:hover{
        background-color: #021c3b;

    }
    
     p{
        color: white;
        font-size: large;
        font-weight: 500;

     }

     .progressbar-container{
        margin: 10px;
     }
}








@media only screen and (max-width: 768px) {
    main{
        flex-direction: column;

    }
}

</style>