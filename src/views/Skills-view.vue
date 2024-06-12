<template>
    <main>
        <div class="box-container" v-for="skill in skills" :key="skill.id">
            <p>{{ skill.name }}</p>

            <div class="progressbar-container">
      <v-progress-circular :model-value="skill.value" :rotate="360" :size="100" :width="15" color="#00ffc3" bg-color="#35557e">
        <template v-slot:default> {{ skill.value }} % </template>
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
                value:100
            },
            {
                id:2,
                name:'Javascript',
                value:90
            },
            {
                id:3,
                name:'Vue Js',
                value:90
            },
            {
                id:4,
                name:'Nuxt',
                value:50
            },
            {
                id:5,
                name:'Sass',
                value:100
            },
            {
                id:6,
                name:'Vuetify',
                value:100
            },
            {
                id:7,
                name:'Bootstrap',
                value:100
            },
            {
                id:8,
                name:'Tailwind',
                value:100
            },
            {
                id:9,
                name:'Jquery',
                value:90
            },
            {
                id:10,
                name:'AJAX',
                value:100
            },
            {
                id:11,
                name:'Git',
                value:100
            },
            {
                id:12,
                name:'Docker',
                value:60
            },
            {
                id:13,
                name:'Linux',
                value:60
            },
            {
                id:14,
                name:'Microsoft Sql Server',
                value:80
            },
            {
                id:15,
                name:'MySql',
                value:80
            },
            {
                id:16,
                name:'Apache Tomcat',
                value:50
            },
            {
                id:17,
                name:'Nginx',
                value:50
            },
            
        ]
        
      }
    },
    mounted () {
        
        
      
    },
    
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