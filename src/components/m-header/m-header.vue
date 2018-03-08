<template>
    <div class="m-header">
      <div class="user">
        <span class="userAvatar" :style="{'background-image': 'url(https://img3.mukewang.com/58575ad00001750409611280-100-100.jpg)'}"></span>
        <span class="userName">呼啸青春</span>
      </div>
      <router-link tag="div" class="letter" to="/user">
        <img src="../../assets/letter.png" alt="">
      </router-link>
      <div class="logo"><img src="../../assets/logo.png" alt=""></div>
    </div>
</template>

<script type="text/ecmascript-6"></script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .m-header
    height 3rem
    background $color-header
    padding 0 10px
    position relative
    .user
      position absolute
      width 7rem
      line-height 3rem
      left 10px
      .userAvatar
        display inline-block
        vertical-align top
        margin-top  .5rem
        border-radius 50%
        width 2rem
        height 2rem
        background-position center
        background-size contain
        background-repeat no-repeat
      .userName
        font-size $font-size-small
    .logo
      margin 0 7rem
      padding-top .5rem
      text-align center
      img
        width 6rem
    .letter
      position absolute
      width 7rem
      right 10px
      text-align right
      padding-top .6rem
      img
        width 2rem
</style>
