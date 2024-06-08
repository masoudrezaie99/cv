<template>
    <main>
        <div><img src="../assets/pic.jpeg" alt=""></div>
        <div>
            
            <p>Hello! My name is Masoud Rezaie, and I was born in the vibrant city of Tehran. I am a passionate and self-taught front-end developer with a special focus on Vue.js. Over the years, I've dedicated myself to mastering the art of creating seamless and intuitive user interfaces that enhance the overall user experience.</p>
        
            
            <p>My journey into the world of web development began out of curiosity and quickly evolved into a full-fledged passion. Through countless hours of self-learning and hands-on practice, I've honed my skills in HTML, CSS, JavaScript, and, most notably, Vue.js. I thrive on the challenge of translating complex problems into elegant, efficient solutions.</p>
        
            
            <p>In addition to my technical skills, I am constantly exploring the latest trends and technologies in the ever-evolving landscape of web development. This continuous learning mindset not only keeps me up-to-date but also fuels my creativity and innovation in every project I undertake.</p>
        
            
            <p>When I'm not coding, I enjoy listening to music and jogging, which help me maintain a balanced and well-rounded life. My goal is to continually grow as a developer and to contribute to projects that make a positive impact.</p>
    
            
            <p>Thank you for taking the time to learn a bit about me. I look forward to connecting and potentially collaborating with like-minded professionals.</p>
        </div>
      
    </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
main{
    display: flex;
    flex-direction: row-reverse;
    
    div{
        width: 100%;
        
        &:nth-child(1){
            max-width: 400px;
            height: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            border: 25px solid #35557e;
            border-radius: 7px;
            -webkit-box-shadow: 10px 10px 25px -3px rgb(2 4 6);
            -moz-box-shadow: 10px 10px 25px -3px rgb(2 4 6);
            box-shadow: 10px 10px 25px -3px rgb(2 4 6);
            aspect-ratio: 1/1;

            img{
                width: 100%;
            }
        }
        &:nth-child(2){
            padding: 40px;
            p{
                font-size: 1.2em;
                color: white;
            }
        }
    }
}

@media only screen and (max-width: 768px) {
    main{
        flex-direction: column;
        align-items: center;
    }
}
</style>
