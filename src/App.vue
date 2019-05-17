<template>
  <div id="app">

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <vfooter></vfooter>

  </div>
</template>

<script>
import footer from 'components/footer/footer'
export default {
  name: 'App',
  components: {
    vfooter: footer
  }
}
</script>
<style>
.ivu-input[disabled],
fieldset[disabled] .ivu-input {
  background-color: #f3f3f3;
  opacity: 1;
  cursor: not-allowed;
  /* color: #515a6e; */
  color: black;
}
</style>
