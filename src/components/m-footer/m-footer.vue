<template>
  <div class="tab">
    <router-link tag="div" class="tab-item index" to="/index">
      <span class="tab-img"></span>
      <span class="tab-link">首页</span>
    </router-link>
    <router-link tag="div" class="tab-item task" to="/task">
      <span class="tab-img"></span>
      <span class="tab-link">任务</span>
    </router-link>
    <router-link tag="div" class="tab-item know" to="/know">
      <span class="tab-img"></span>
      <span class="tab-link">知识</span>
    </router-link>
    <router-link tag="div" class="tab-item center" to="/center">
      <span class="tab-img"></span>
      <span class="tab-link">我的</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab
    position fixed
    bottom 0
    width 100%
    height: 3rem
    background $color-footer
    font-size: .5rem
    .tab-item
      float:left
      width 25%
      text-align: center
      .tab-link
        padding-bottom: 5px
        color: $color-text-l
        display :block
      &.router-link-active
        .tab-link
          color: $color-theme
      .tab-img
        display inline-block
        width 2rem
        height 2rem
        background-position center
        background-size contain
        background-repeat no-repeat
    .index
      .tab-img
        background-image url("index@3x.png")
      &.router-link-active
        .tab-img
          background-image url("index@33x.png")
    .task
      .tab-img
        background-image url("task@3x.png")
      &.router-link-active
        .tab-img
          background-image url("task@33x.png")
    .know
      .tab-img
        background-image url("know@3x.png")
      &.router-link-active
        .tab-img
          background-image url("know@33x.png")
    .center
      .tab-img
        background-image url("center@3x.png")
      &.router-link-active
        .tab-img
          background-image url("center@33x.png")
</style>
