<template>
  <div class="videoPlayPage">
    <div class="left">
      <div class="title">动漫《鬼灭之刃-花街篇》片头曲 残响散歌</div>
      <div class="videoBox">
          <video src="E:/mtv/鬼灭之刃/残响散歌.mp4" controls></video>
      </div>
      <div class="videoNav">
          <span>one</span>
          <span>two</span>
          <span>three</span>
          <span>four</span>
      </div>
      <div class="discussBox">
          <div class="disCussTile">留言</div>
          <div class="myDiscuss">
            <img src="" alt="">
            <input type="text">
            <input type="button" value="留言">
          </div>
          <ul class="disussArea">
            <li>
                <div class="uerInfo">
                  <img src="" alt="">
                  <span>金·不乱来嗷嗷 </span>
                </div>
                <span>身为一个合格的舰长，要不断在刀的海洋中探索…</span>
            </li>
          </ul>
      </div>
    </div>
    <div class="rightNav">
        <div class="alumb videoBox">
          <div class="navTitle">专辑精选</div>
          <ul class="videoCard">
              <li>
                  <img src="" alt="">
              </li>
          </ul>
        </div>
        <div class="recommod videoBox">
          <div class="navTitle">推荐视频</div>
          <ul class="videoCard">
              <li>
                  <img src="@/common/img/mv/Kinetsu-1.pngx" alt="">
              </li>
          </ul>
        </div>
        
      
      </div>
  </div>
</template>

<script>
export default {
    name:"Play"
}
</script>

<style>

</style>