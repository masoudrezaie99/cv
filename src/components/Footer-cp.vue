<template>
    <div class="footer">
        <div>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="https://www.instagram.com/iammasoud99/?utm_source=qr&r=nametag"><i class="fa fa-instagram"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="https://www.t.me/masoudrezaie99"><i class="fa fa-telegram"></i></a>
    </div>
    </div>
</template>

<script>
    export default {
        name:'Footer-cp',


    }
</script>

<style lang="scss" scoped>
 .footer{
    margin-top: 20px;
    border-top: 1px solid #b7dbff;

    div{
        padding: 10px;
        width: 200px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        
        a{
            color: #b7dbff;
            &:hover{
                color:#00ffc3
            }
        }
    }
 }
</style>