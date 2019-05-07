<template>
  <div>
    <dir class="userInformation">
      <div class="avatar">
      </div>
      <div class="information">
        <p style="font-size:18px;font-weight:900">xiao</p>
        <p>starfishing</p>
      </div>
    </dir>
    <div class="qrwrapper">
      <qriously value="3150611082"
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
.qrwrapper
  width 200px
  height 200px
  margin 0 auto
</style>
