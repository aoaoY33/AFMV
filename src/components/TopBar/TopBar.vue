<template>
    <header id="headContainer">
        <div id="headNav">
            <img src="@/common/img/TopBar/logo-白.png" alt="">
            <span class="iconfont icon-home"></span>
            <div class="search">
                <div class="searchInput">
                    <input type="text" v-model="content" ref="f" @focus="showHistroy" @blur="hideHistroy">
                    <span class="iconfont icon-search" @click="search(content)"></span>
                </div>
                <div class="histroy " v-show="isHistroy">
                    <div class="title">
                        <span>搜索历史</span>
                        <span @click="clearH()">清空</span>
                    </div>
                    <div class="hisItemBox">
                        <span class="hisItem" v-for="(histroy,index) in histroys" :key="index">{{histroy}}</span>
                    </div>
                </div>
            </div>
            <span class="iconfont icon-mail"></span>
            <span class="iconfont icon-user"></span>
            <span class="iconfont icon-setting"></span>
        </div>
    </header >
    <div id="headBg">
            <img src="@/common/img/TopBar/header-role.png" alt="" class="role">
            <img src="@/common/img/TopBar/header-bg.png" alt="" class="bg">
    </div>
</template>

<script>
import { isReactive, reactive, ref } from '@vue/reactivity'
import { onMounted, onBeforeMount } from '@vue/runtime-core'
export default {
    name:"TopBar",
    setup(){
        let isHistroy=ref(false)
        let histroys=reactive([])
        let content=ref("")

        //清除历史记录
        function clearH(){
            histroys.splice(0,histroys.length)
            isHistroy.value=false
            sessionStorage.removeItem('histroys')
        }

        //搜索,添加历史记录
        function search(v){
            if(v===''){
                return
            }
            let num=histroys.indexOf(v)
            if(num!=-1){
                histroys.splice(num,1)
                histroys.unshift(v)
            }else{
                histroys.unshift(v)
            }
            content.value=""
            sessionStorage.setItem('histroys',JSON.stringify(histroys))
        }

        //显示历史记录
        function showHistroy(){
            isHistroy.value=true
        }

        //隐藏历史记录
        function hideHistroy(){
            setTimeout(()=>{
                isHistroy.value=false
            },200)
        }


        onMounted(()=>{
            sessionStorage.setItem('histroys',JSON.stringify([]))
            histroys.unshift(...reactive(JSON.parse(sessionStorage.getItem('histroys'))))
            
        })





        return{
            isHistroy,
            histroys,
            clearH,
            content,
            search,
            showHistroy,
            hideHistroy
        }
    }
}
</script>

<style lang="less">
    #headContainer{
        margin: 0 auto;
        z-index: 10;
        color: white;
        position: relative;
        background-color: rgba(0,0,0,0.5);
        #headNav{
            position: relative;
            display: flex;
            width: 1400px;
            height: 70px;
            margin: 0 auto;
            align-items: center;
            justify-content: space-between;
            img{
                height: 70px;
            }
            .search{
                width: 356px;
                box-sizing: border-box;
                border: 2px solid white;
                display: flex;
                flex-direction: column;
                position: relative;
                .searchInput{
                    width: 100%;
                    display: flex;    
                    input{
                        outline: none;
                        background: none;
                        width: 316px;
                        color: white;
                        font-size: 20px;
                        padding: 0 10px;
                    }
                    span{
                        box-sizing: border-box;
                        border-left: 2px solid white;
                        &:hover{
                            color: none;
                            transform: scale(1);
                        }
                    }
                }
                .histroy{
                    position: absolute;
                    top: 40px;
                    width: 310px;
                    background-color: rgba(255,255,255,0.7);
                    display: flex;
                    flex-direction: column;
                    .title{
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        span{
                            padding: 10px;
                            font-size: 16px;
                            color: black;
                            &:last-child{
                                color: gray;
                                font-size: 14px;
                            }
                            &:hover{
                                transform: scale(1);
                            }
                        }
                    }
                    .hisItemBox{
                        width: 316px;
                        display: flex;
                        flex-wrap: wrap;
                        .hisItem{
                            margin: 10px;
                            padding:5px;
                            font-size: 11px;
                            background-color: rgba(0,0,0,0.7);
                            &:hover{
                                transform: scale(1);
                            }
                        }
                    }
                }
            }
            span{
                font-size: 40px;
                cursor: pointer;
                transition:  0.5s;
                &:hover{
                    transform: scale(1.5);
                    color: gray;
                }
            }
        }
       
    }
    #headBg{
            position: relative;
            height: 160px;
            width: 100%;
            margin-top: -70px;
            overflow: hidden;
            margin-bottom: 20px;
            
            .role{
                width: 1920px;
                z-index: 1;
                position: absolute;
                top: -50px;
            }
            .bg{
                width: 2140px;
                position: absolute;
            }
        }
</style>