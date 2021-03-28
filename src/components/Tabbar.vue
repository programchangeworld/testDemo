<template>
    <nav>
        <ul>
            <router-link to="/film" tag="li" active-class="myactive">
                <i class="iconfont icon-dianying"></i>
                <span>电影</span>
            </router-link>
            <router-link to="/cinema" tag="li" active-class="myactive">
                <i class="iconfont icon-huabankaobei"></i>
                <span>影院</span>
            </router-link>
            <router-link to="/center" tag="li" active-class="myactive">
                <i class="iconfont icon-wode"></i>
                <span>我的</span>
            </router-link>
        </ul>
    </nav>
</template>
<style lang="scss" scoped>
    nav{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background: white;
        line-height: 50px;
        text-align: center;
        ul{
            display: flex;
            list-style: none;

            li{
                flex: 1;
                span{
                    font-size: 12px;
                }
            }
        }
    }
    .myactive{
        color: red;
    }
</style>
