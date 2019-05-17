<template>
  <div class="footer">
    <router-link tag="div"
                 class="wrapper"
                 to="/work">
      <span class="iconT"></span>
      <span class="select">题库</span>
    </router-link>
    <router-link tag="div"
                 class="wrapper"
                 to="/progress/root">
      <span class="iconJ"></span>
      <span class="select">进度</span>
    </router-link>
    <router-link tag="div"
                 class="wrapper"
                 to="/self">
      <span class="iconM"></span>
      <span class="select">我的</span>
    </router-link>

  </div>
</template>
<script>
export default {
}
</script>
<style scoped lang="stylus"  rel="stylesheet/stylus">
@import '~common/stylus/base'
.footer
  position fixed
  display flex
  border-top-left-radius 10px
  border-top-right-radius 10px
  background-color rgba(0, 0, 0, 0.2)
  height 50px
  bottom 0
  left 0
  right 0
  overflow hidden
  .wrapper
    flex 1
    text-align center
    border-right 1px solid #999
    font-size 0
    &:last-child
      border-right none
    display flex
    align-items center
    justify-content center
    .iconT
      icon('icon/作业.png')
    .iconJ
      icon('icon/进度.png')
    .iconM
      icon('icon/个人中心.png')
    .select
      font-size 18px
      display inline-block
      margin-left 5px
  .router-link-active
    background-color #2fda4a91
</style>
