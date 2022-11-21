<template>
  <div class=banner>
        <div class="bannerIndex">
            <div class="bannerItem" :class="{active:isActive===index}" v-for="(banner,index) in banners" :key="banner.id" @click="checkIndex(index)">
                <div :class="{border:isActive===index}"></div>
                <img :src="require('@/common/img/Bar/'+banner.imgUrl)" alt="">
            </div>
        </div>
        <div class="bannerShow">
            <span class="kind">动漫MV</span>
            <div class="tvShow">
                <span class="title">{{showPage.bannerName.tvName}}</span>
                <span class="kindName">{{showPage.bannerName.tvKind}}</span>
                <span class="songName">{{showPage.bannerName.songName}}</span>
            </div>
            <img :src="require('@/common/img/Bar/'+showPage.imgUrl)" alt="">
            <div class="play">
                <span class="iconfont icon-24gf-play"></span>
            </div>
        </div>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'

export default {
    name:"Banner",
    setup(){
        let banners=reactive([
        {
            "id":1,
            "name":"《游戏人生·零》主题曲 THERE IS A RESON",
            "imgUrl":"mv-9.png",
            "bannerName":{
                "tvName":"游戏人生·零",
                "tvKind":"主题曲",
                "songName":"THERE IS A RESON"
            },
            "tvUrl":"..."           
        },
        {
            "id":2,
            "name":"《暗杀教室》片头曲 ByeByeYesterday",
            "imgUrl":"mv-7.png",
            "bannerName":{
                "tvName":"暗杀教室",
                "tvKind":"片头曲",
                "songName":"ByeByeYesterday"
            },
            "tvUrl":"..."           
        },
        {
            "id":3,
            "name":"《复活的鲁鲁修》主题曲 reviece",
            "imgUrl":"mv-12.png",
            "bannerName":{
                "tvName":"复活的鲁鲁修",
                "tvKind":"主题曲",
                "songName":"Reviece"
            },
            "tvUrl":"..."           
        },
        {
            "id":4,
            "name":"《海贼王-狂热行动》主题曲 GONG",
            "imgUrl":"mv-11.png",
            "bannerName":{
                "tvName":"海贼王-狂热行动",
                "tvKind":"主题曲",
                "songName":"GONG"
            },
            "tvUrl":"..."           
        },
        {
            "id":5,
            "name":"《异度侵入》片头曲 ミスターフィクサー",
            "imgUrl":"mv-10.png",
            "bannerName":{
                "tvName":"异度侵入",
                "tvKind":"片头曲",
                "songName":"ミスターフィクサー"
            },
            "tvUrl":"..."           
        }
    ])
        let isActive=ref(0)
        let showPage=ref(banners[0])
        let timer
        function autoPlay(){
            timer=setInterval(()=>{
                isActive.value++
                if(isActive.value>=banners.length)isActive.value=0
                showPage.value=banners[isActive.value]
            },4000)
        }

        function checkIndex(index){
            clearInterval(timer)
            isActive.value=index
            showPage.value=banners[index]
            autoPlay()
        }

        onMounted(()=>{
            autoPlay()
        })

        return{
            banners,
            isActive,
            checkIndex,
            showPage
        }
    }
}
</script>

<style lang="less">
    .banner{
        position: relative;
        top: 0px;
        display: flex;
        margin: 0 auto;
        width: 1400px;
        margin-bottom: 30px;
        background-color: black;
        .bannerIndex{
            width: 355px;
            display: flex;
            flex-direction: column;
            .bannerItem{
                position: relative;
                width: 100%;
                height: 124px;
                overflow: hidden;
                opacity: 0.5;
                transition: 0.5s;
                cursor: pointer;
                img{
                    position: absolute;
                    transition: 0.5s;
                    width: 100%;
                }
                &:hover{
                    opacity: 1;
                    img{
                        transform: scale(1.2);
                    }
                }
                .border{
                    z-index: 1;
                    position: absolute;
                    width: 100%;
                    height: 124px;
                    border: 5px solid white;
                    box-sizing: border-box;
                }
            }
            .active{
                opacity: 1;
                transition: 0.5s;
                img{
                    transform: scale(1.2);
                }
            }
        }
        .bannerShow{
            color: white;
            position: relative;
            width: 1045px;
            height: 620px;
            overflow: hidden;
            .kind{
                z-index: 9;
                position: absolute;
                background-color: #00a0e9;
                color: white;
                font-size: 28px;
                padding: 15px 10px;
                border-radius: 10px;
                left: 90px;
                top: 40px;
            }
            .tvShow{
                z-index: 9;
                position:absolute;
                display: flex;
                flex-direction: column;
                font-size: 48px;
                top: 180px;
                left: 90px;
                span{
                    margin-bottom: 40px;
                }
            }
            img{
                z-index: 0;
                position: absolute;
                width: 120%;
            }
            .play{
                z-index: 9;
                position: absolute;
                border: 4px solid white;
                bottom: 40px;
                right: 40px;
                padding: 15px 80px;
                span{
                    font-size: 70px;
                }
            }
        }
    }
</style>