<template>
    <nav>
        <div>
            <div>
                <router-link to="/">
                <div><img src="../assets/logo2.png" alt=""></div>
                <h1>Masoud Rezaie</h1>
            </router-link>
            </div>

            <div><ul>
                
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/AboutMe">About Me</router-link></li>
                <li><router-link to="/Skills">Skills</router-link></li>
                <li><router-link to="/Portfolio">Portfolio</router-link></li>
                <li><router-link to="/ContactMe">Contact Me</router-link></li>
                
            </ul></div>

            <div @click="openNav()">
                <i class="fa fa-bars"></i>
            </div>
            <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" @click="closeNav()"><i class="fa fa-close"></i></a>
            <router-link to="/" @click="closeNav()">Home</router-link>
            <router-link to="/AboutMe" @click="closeNav()">About Me</router-link>
            <router-link to="/Skills" @click="closeNav()">Skills</router-link>
            <router-link to="/Portfolio" @click="closeNav()">Portfolio</router-link>
            <router-link to="/ContactMe" @click="closeNav()">Contact Me</router-link>
            </div>

        </div>
    </nav>
        
    
</template>

<script>
    export default {
        name:'Navbar-cp',
        data(){
            return{
                openNav() {
        document.getElementById("mySidenav").style.width = "100%";
                },

                closeNav() {
                document.getElementById("mySidenav").style.width = "0";
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
  nav{
    margin-top: 20px;
    margin-bottom: 50px;

    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: white;

        div{
            &:nth-child(1){
                    a{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    color: white;
                    cursor: pointer;
                    text-decoration: none;
                    &:hover{
                    color:#00ffc3
                    }
                    div{
                        &:nth-child(1){
                        border: 2px solid #00ffc3;
                        border-radius: 100%;
                        overflow: hidden;
                        width: 50px;
                        height: 50px;
                        margin-right: 10px;

                        img{
                            width: 100%;
                        }
                        }
                    }
                }
            }
            &:nth-child(2){
                display: flex;
                flex-direction: row;
                align-items: center;
                min-width: 500px;
                ul{
                    width: 100%;
                    list-style: none;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

                    li{
                        a{
                            color: white;
                            text-decoration: none;
                            font-size: large;
                            cursor: pointer;
                            font-weight: 500;
                            &:hover{
                                color:#00ffc3
                            }
                        }

                        .router-link-active{
                            color: #00ffc3;
                        }
                    }
                }
            }
            &:nth-child(3){
                display: none;
                height:fit-content;
                justify-content: center;
                align-items: center;
                border-radius: 7px;
                border: 2px solid #FFF;
                padding: 8px;
                font-size: large;
                cursor: pointer;
            }
        }
    }
  }


    /////////////////////////////////
 
    .sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #1e2d40;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  padding-bottom: 60px;
  text-align:center;
  display: flex;
  flex-direction: column;

  a{
    text-decoration: none;
    font-size: 25px;
    color: #f1f1f1;
    display: block;
    transition: 0.3s;
  }

  .router-link-active{
    color: #00ffc3;
  }

  .closebtn{
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
}



    @media only screen and (max-width: 768px) {
        nav{
            div{
                div{
                    &:nth-child(1){
                        h1{
                            font-size: 1em;
                        }
                    }
                    &:nth-child(2){display: none;}
                    &:nth-child(3){display: flex;}
                }
            }
        }

    }
        
</style>