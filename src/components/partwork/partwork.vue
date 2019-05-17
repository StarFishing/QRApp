<template>
  <transition name="slide">
    <div class="partWrapper">
      <div class="content-wrapper">
        <span class="back"
              @click="backTo"></span>
        <div class="title">{{workNum.title}}</div>
        <div class="exercises"
             v-for="(items, index) in workNum.data"
             :key="index">
          <div class="desciption">{{index+1+". "}}{{items.name}}</div>
          <div class="choice"
               v-if="items.choice">
            <RadioGroup v-model="result[index]">
              <Radio :label='getId(id)'
                     v-for="(item,id) in items.choice"
                     :key="id">
                <span>{{item}}</span>
              </Radio>
            </RadioGroup>
          </div>
          <div class="choice"
               v-if="items.judge">
            <RadioGroup v-model="result[index]">
              <Radio :label='getId(id)'
                     v-for="(item,id) in items.judge"
                     :key="id">
                <span>{{item}}</span>
              </Radio>
            </RadioGroup>
          </div>
          <div class="choice"
               v-if="items.readprogramma">

            <Input :value="getValue(items.readprogramma)"
                   disabled
                   type="textarea"
                   :autosize="true"
                   placeholder="Enter something..."
                   style="margin-bottom:8px" />
            <Input v-model="result[index]"
                   type="textarea"
                   :autosize="true"
                   placeholder="Enter answer..."
                   style="margin-bottom:8px" />

          </div>
          <div class="choice"
               v-if="items.completeprogramma">

            <Input :value="getValue(items.completeprogramma)"
                   disabled
                   type="textarea"
                   :autosize="true"
                   placeholder="Enter something..."
                   style="margin-bottom:8px" />
            <Input v-model="result[index]"
                   type="textarea"
                   :autosize="true"
                   placeholder="Enter answer..."
                   style="margin-bottom:8px" />

          </div>
          <div class="choice"
               v-if="items.writeProgramma">
            <div style="margin-bottom:8px">描述：{{getValue(items.writeProgramma)}}</div>
            <Input v-model="result[index]"
                   type="textarea"
                   :autosize="{minRows: 4}"
                   placeholder="Enter answer..."
                   style="margin-bottom:8px" />

          </div>
        </div>
      </div>
      <div class="result-wrapper">
        <Button type="primary"
                @click="makesure">确认</Button>
        <Button type="dashed"
                @click="makecancel">取消</Button>
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
      result: [],
      jsont: ''
    }
  },
  created () {
    // console.log(this.workNum)
  },
  methods: {
    backTo () {
      // console.log(this.result)
      this.$emit('backTo')
    },
    getId (id) {
      return id
    },
    getAnswer (value) {
      return value
    },
    makesure () {
      // console.log(JSON.stringify(this.result[3]))
      this.$Message.info('提交成功')
    },
    makecancel () {
      this.$Message.info('已取消操作')
    },
    getValue (value) {
      if (value) {
        // console.log(Array.isArray(value))
        return value[0]
      }
    }
  },
  watch: {
    workNum () {
      this.result = new Array(this.workNum.data.length).fill('')
      // console.log(this.result)
    }
  },
  components: {
  }
}
</script>
<style lang='stylus' scoped>
.slide-enter-active, .slide-leave-active
  transition all 0.3s
.slide-enter, .slide-leave-to
  transform translate3d(100%, 0, 0)
.partWrapper
  position absolute
  top 50px
  bottom 0
  left 0
  right 0
  overflow auto
  background #808080
  .content-wrapper
    min-height 100%
    padding-bottom 50px
    .back
      display inline-block
      width 20px
      height 20px
      background-image url('../../assets/返回.png')
      background-size 20px 20px
      margin-left 5px
      margin-top 10px
    .title
      height 20px
      text-align center
      line-height 20px
    .exercises
      width 90%
      margin 0 auto
      border-bottom 1px solid black
      margin-bottom 10px
      min-height 60px
      &:last-child
        border-bottom none
      .desciption
        padding 0 10px 0 10px
        margin-bottom 10px
      .choice
        padding 0 10px 0 10px
        min-height 20px
  .result-wrapper
    position relative
    width 120px
    height 32px
    margin -50px auto 0 auto
    clear both
</style>
