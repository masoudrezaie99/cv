<template>
    <div class="home">

        <div>
            <p>Independent</p>
            <p>Front-End Developer</p>
            <p>Experienced front-end developer specializing in Vue.js and Nuxt.js with a passion for crafting intuitive and visually appealing web applications.</p>
        </div>

        <div>
            <img src="../assets/pic.jpeg" alt="">
        </div>
        
    </div>
</template>

<script>
   
</script>

<style lang="scss" scoped>
    .home{
        padding: 40px 60px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        div:nth-child(1){
            padding: 80px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            color: #fff;
            width: 100%;

            p:nth-child(1){
                font-size: 48px;
                font-weight: 500;
            }

            p:nth-child(2){
                font-size: 58px;
                font-weight: 500;
            }

            p:nth-child(3){
                color: #b7dbff;
                font-size: 24px;
            }
        }

        div:nth-child(2){
            width: 100%;
            margin: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            border: 25px solid #35557e;
            border-radius: 100%;
            -webkit-box-shadow: 10px 10px 25px -3px rgb(2 4 6);
            -moz-box-shadow: 10px 10px 25px -3px rgb(2 4 6);
            box-shadow: 10px 10px 25px -3px rgb(2 4 6);

            
            img {
                -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
                filter: grayscale(100%);
                object-fit: contain;
                width: 100%;

                &:hover{
                    filter: grayscale(0%);
                        }
}
        }
    }

    @media only screen and (max-width: 768px) {
        .home{
        padding:0;
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;

        div:nth-child(1){
            padding: 10px;
            align-items: right;
            justify-content: center;
        }

        div:nth-child(2){
            margin: 0;
        }
    }
    }
</style>