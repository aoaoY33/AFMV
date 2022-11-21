<template>
    <div class="title">
        <span class="title">动漫MV</span>
        <a href="#">换一换</a>
    </div>
</template>

<script>
export default {
    name:"KindTitle"
}
</script>

<style lang="less">
    .title{
        width: 1400px;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        span{
            font-size: 24px;
            color: white;
        }
        a{
            list-style-type: none;
            font-size: 12px;
            white-space: nowrap;
        }

    }
</style>