<template>
  <div class="work">
    <div class="task"
         v-show="!part">
      <div class="tips">今日任务</div>
      <div class="daycontent">Please to finish part one</div>
    </div>
    <div class="content"
         ref="content">
      <scroll class="wrapper">
        <div>
          <div class="module-wrapper"
               v-for="(item ,index) in questionBank"
               :key="index"
               @click="progress(item)">
            <div style="text-align:center"
                 class="chapter">{{item.part}}</div>
            <div class="description">{{item.description}}</div>
          </div>
        </div>
      </scroll>

    </div>
    <partwork v-show="part"
              @backTo="Home"
              :workNum="workNum"></partwork>
  </div>
</template>
<script>
import scroll from '@/base/scroll/scroll'
import partwork from 'components/partwork/partwork'
import { get } from '@/base/api/axios'
export default {
  data () {
    return {
      part: false,
      questionBank: [], // 题库
      workNum: []
    }
  },
  created () {
    get('/data').then((data) => {
      this.questionBank = data.data
    })
  },
  methods: {
    progress (item) {
      this.workNum = item.work
      this.part = true
      this.$refs.content.style.left = '-60px'
    },
    Home () {
      this.part = false
      this.$refs.content.style.left = '0'
    }
  },
  components: {
    scroll,
    partwork
  }
}
</script>
<style lang="stylus" scoped>
.work
  box-sizing: border-box
  width: 100%
  position: absolute
  height: 100vh
  background: #808080
  bottom: 50px
  padding: 50px 0 0 0
  overflow: hidden
  .task
    display: flex
    align-items: center
    height: 50px
    margin-bottom: 20px
    background-color: #808080
    .tips
      flex: 0 0 32px
      justify-content: center
      border-right: 1px solid black
      margin-left: 20px
      padding-right: 20px
      box-sizing: content-box
    .daycontent
      flex: 1
      text-align: left
      margin-left: 40px
  .content
    position: absolute
    top: 120px
    bottom: 0
    left: 0
    right: 0
    overflow: hidden
    transition: all 0.3s
    .wrapper
      height: 100%
      .module-wrapper
        display: flex
        margin: 0 20px 0 20px
        height: 80px
        margin-bottom: 10px
        border: 1px solid black
        border-radius: 10px
        text-align: center
        align-items: center
        justify-content: center
        .chapter
          flex: 0 0 80px
          padding: 10px 0
          border-right: 1px solid
        .description
          flex: 1
          padding: 0 5px
          text-align: left
</style>
