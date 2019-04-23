<template>
  <div class="qrwrapper">
    <qriously value="Hello World!&time=2019"
              :size="200" />
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
.qrwrapper
  width: 200px
  height: 200px
  margin: 0 auto
</style>
