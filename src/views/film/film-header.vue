<template>
    <div>
        <ul>
            <router-link to='/film/Nowplaying' tag="li" active-class="myactive">正在热映</router-link>
            <router-link to='/film/Comingsoon' tag="li" active-class="myactive">即将上映</router-link>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
div{
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: #fff;
    box-sizing:border-box;
}
ul{
    list-style: none;
    display: flex;
    justify-content: space-around;
    text-align: center;
    li{
        flex: 1;
    }
}
.myactive{
    color: red;
    border-bottom: 2px solid red;
}
</style>
