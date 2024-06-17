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
  export default {
    data () {
      return {

        skills:[
            {
                id:1,
                name:'Html/css',
                minVal:0,
                maxVal:100
            },
            {
                id:2,
                name:'Javascript',
                minVal:0,
                maxVal:90
            },
            {
                id:3,
                name:'Vue Js',
                minVal:0,
                maxVal:90
            },
            {
                id:4,
                name:'Nuxt',
                minVal:0,
                maxVal:50
            },
            {
                id:5,
                name:'Sass',
                minVal:0,
                maxVal:100
            },
            {
                id:6,
                name:'Vuetify',
                minVal:0,
                maxVal:100
            },
            {
                id:7,
                name:'Bootstrap',
                minVal:0,
                maxVal:100
            },
            {
                id:8,
                name:'Tailwind',
                minVal:0,
                maxVal:100
            },
            {
                id:9,
                name:'Jquery',
                minVal:0,
                maxVal:90
            },
            {
                id:10,
                name:'AJAX',
                minVal:0,
                maxVal:100
            },
            {
                id:11,
                name:'Git',
                minVal:0,
                maxVal:100
            },
            {
                id:12,
                name:'Docker',
                minVal:0,
                maxVal:60
            },
            {
                id:13,
                name:'Linux',
                minVal:0,
                maxVal:60
            },
            {
                id:14,
                name:'Microsoft Sql Server',
                minVal:0,
                maxVal:80
            },
            {
                id:15,
                name:'MySql',
                minVal:0,
                maxVal:80
            },
            {
                id:16,
                name:'Apache Tomcat',
                minVal:0,
                maxVal:50
            },
            {
                id:17,
                name:'Nginx',
                minVal:0,
                maxVal:50
            },
            
        ],

        i:0,

   
            
        
      }
    },
    


    methods:{
        
    },

    mounted () {  
        
        this.skills.forEach((element) => {
            
                setInterval(function() {
                    if(element.minVal<element.maxVal){
                element.minVal++
                }
            }, 10);
            
            
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