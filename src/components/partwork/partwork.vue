<template>
  <transition name="slide">
    <div class="partWrapper">
      <span class="back"
            @click="backTo"></span>
      <div class="title">{{workNum.title}}</div>
      <div class="exercises"
           v-for="(items, index) in workNum.data"
           :key="index">
        <div class="desciption">{{index+1+". "}}{{items.name}}</div>
        <div class="choice">
          <RadioGroup v-model="result[index]">
            <Radio :label='getId(id)'
                   v-for="(item,id) in items.choice"
                   :key="id">
              <span>{{item}}</span>
            </Radio>
          </RadioGroup>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    workNum: {}
  },
  data () {
    return {
      result: []
    }
  },
  methods: {
    backTo () {
      console.log(this.result)
      this.$emit('backTo')
    },
    getId (id) {
      return id
    }
  },
  watch: {
    workNum () {
      this.result = new Array(this.workNum.data.length).fill('')
      console.log(this.result)
    }
  },
  components: {
  }
}
</script>
<style lang='stylus' scoped>
.slide-enter-active, .slide-leave-active
  transition: all 0.3s
.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0, 0)
.partWrapper
  position: absolute
  top: 50px
  bottom: 0
  left: 0
  right: 0
  overflow: hidden
  background: #808080
  .back
    display: inline-block
    width: 20px
    height: 20px
    background-image: url('../../assets/返回.png')
    background-size: 20px 20px
    margin-left: 5px
    margin-top: 10px
  .title
    height: 20px
    text-align: center
    line-height: 20px
  .exercises
    width: 90%
    margin: 0 auto
    border-bottom: 1px solid black
    margin-bottom: 5px
    height: 60px
    .desciption
      padding: 0 10px 0 10px
      margin-bottom: 10px
    .choice
      padding: 0 10px 0 10px
      height: 20px
</style>
