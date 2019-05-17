<template>
  <div>
    <div class="userInformation">
      <div class="avatar">
      </div>
      <div class="information">
        <p style="font-size:18px;font-weight:900">张杰</p>
        <p>江苏大学</p>
      </div>
    </div>
    <div class="list">
      <p class="name">课程:</p>
      <p class="text">C语言</p>
    </div>
    <div class="list">
      <p class="name">班级:</p>
      <p class="text">物联网1501</p>
    </div>
    <div class="list">
      <p class="name">学号:</p>
      <p class="text">3150611017</p>
    </div>
    <div class="qrwrapper">
      <qriously value="Hello World!&time=2019"
                :size="200" />
    </div>

  </div>

</template>
<script>
export default {
  data () {
    return {}
  },
  components: {
  }
}
</script>
<style lang='stylus' scoped>
.userInformation
  display flex
  height 60px
  margin 40px 0 30px 20px
  padding 0
  .avatar
    flex 0 0 60px
    border-radius 10px
    width 60px
    heigth 60px
    background-image url('../../assets/avatar.jpeg')
    background-size 60px 60px
    background-repeat no-repeat
  .information
    margin-left 10px
    margin-right 30px
    padding 10px
    background #fffafab0
    border-radius 10px
    height 60px
    flex 1
    text-align left
.list
  height 40px
  background white
  width 90%
  margin 0 auto
  border-radius 8px
  padding 5px
  margin-bottom 10px
  .name
    margin-right 40px
    margin-left 10px
  .text, .name
    line-height 30px
    display inline-block
.qrwrapper
  width 200px
  height 200px
  margin 0 auto
</style>
