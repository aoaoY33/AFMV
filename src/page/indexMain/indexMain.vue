<template>
    <!-- <div id="main"> -->
        <!-- <TopBar></TopBar> -->
        <Banner></Banner>
        <KindTitle></KindTitle>
        <div class="videoList">
            <VideoItem v-for="video in videos" :key="video.id" :videoInfo="video" @click="toPlay"></VideoItem>
        </div>
    <!-- </div> -->
</template>

<script>
import TopBar from '@/components/TopBar/TopBar';
import Banner from '@/components/Banner/Banner';
import KindTitle from '@/components/KindTitle/KindTitle.vue';
import VideoItem from '@/components/VideoItem/VideoItem.vue';

import { reactive } from 'vue';
import router from '@/router';

export default {
  name: 'indexMain',
  components: {
    TopBar,
    Banner,
    KindTitle,
    VideoItem
  },
  setup(){
    let videos=reactive([
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
 
    function toPlay(){
      router.push('Play')
    }

    return {
      videos,
      toPlay
    }
  }
}
</script>

<style lang="less">
  // #main{
  //   // width: 100%;
  //   // height: 100%;
  //   // background:url(@/common/img/TopBar/header-bg-img.png);
  //   background-color: black;
  //   background-size: cover;
    .videoList{
      width: 1400px;
      margin: auto;
      display: flex;
      justify-content: space-between;
    }
  // }
</style>