<template>
  <div id="app"
       @touchmove.prevent>

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
</style>
