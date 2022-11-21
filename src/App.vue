<template>
  <div id="main">
    <TopBar></TopBar>
    <router-view></router-view>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar/TopBar.vue";
export default {
  name:"App",
  components:{
    TopBar
  }

}
</script>

<style>
  #main{
   width: 100%;
   height: 100%;
  background-color: black;
}
</style>