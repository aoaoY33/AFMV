<template>
  <div class="videoCard">
        <div class="videoImg">
            <img :src="require('@/common/img/Bar/'+video.imgUrl)">
            <div class="time"><span>04:30</span></div>
        </div>
        <div class="videoInfo">
            <span><b>《{{video.bannerName.tvName}}》 {{video.bannerName.tvKind}}</b></span>
            <span><b>{{video.bannerName.songName}}</b></span>
            <span>发布时间：2020-10-11</span>
        </div>
  </div>
</template>

<script>
import { onBeforeMount, onMounted, reactive } from '@vue/runtime-core'
export default {
    name:"VideoItem",
    props:["videoInfo"],
    setup(props){
        let video=reactive(props.videoInfo)
        
        console.log(video);
        return{
            video
        }
    }
}
</script>

<style lang="less">
    .videoCard{
        width: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid white;
        background-color: black;
        cursor: pointer;
        .videoImg{
            width: 100%;
            position: relative;
            height: 140px;
            overflow: hidden;
            img{
                width: 100%;
                position: absolute;
            }
            .time{
                width: 100%;
                position: absolute;
                color: white;
                font-size: 10px;
                background-color: rgba(0,0,0,0.4);
                bottom: 0px;
                text-align: right;
                span{
                    padding: 5px;
                }
            }
        }
        .videoInfo{ 
            
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            span{
                transition: 0.5s;
                padding: 10px 0;
                color: white;
                font-size: 14px;
                &:last-child{
                    text-align: right;
                    font-size: 10px;
                    color: #cccccc;
                }
                &:hover{
                    color: red;
                }
            }
        }
    }
</style>