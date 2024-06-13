<template>
    <main>

        <div class="animatepop">
            <p>Independent</p>
            <p>Front-End Developer</p>
            <p>Experienced front-end developer specializing in Vue.js and Nuxt.js with a passion for crafting intuitive and visually appealing web applications.</p>
        </div>

        <div class="animatepop">
            <img src="../assets/pic.jpeg" alt="">
        </div>
        
    </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    main{
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: space-around;

        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            color: #fff;
            width: 100%;
            max-width: 600px;
            margin: 40px;

            &:nth-child(1){
                p{
                    &:nth-child(1){
                        font-size: 68px;
                        font-weight: 500;
                    }

                    &:nth-child(2){
                        font-size: 68px;
                        font-weight: 500;
                    }

                    &:nth-child(3){
                        color: #b7dbff;
                        font-size: 34px;
                    }
                }
            }

            &:nth-child(2){
                overflow: hidden;
                border: 25px solid #35557e;
                border-radius: 100%;
                -webkit-box-shadow: 10px 10px 25px -3px rgb(2 4 6);
                -moz-box-shadow: 10px 10px 25px -3px rgb(2 4 6);
                box-shadow: 10px 10px 25px -3px rgb(2 4 6);


                img{
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

    }





    @media only screen and (min-width: 992px) {
        main{
            flex-direction: row;
            div{
                &:nth-child(1){
                    p{
                    &:nth-child(1){
                        font-size: 58px;
                        font-weight: 500;
                    }

                    &:nth-child(2){
                        font-size: 58px;
                        font-weight: 500;
                    }

                    &:nth-child(3){
                        color: #b7dbff;
                        font-size: 24px;
                    }
                }
                }
            }
        }
    }

</style>