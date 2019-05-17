<template>
  <div class="work">
    <div class="task"
         v-show="!part">
      <div class="tips">今日任务</div>
      <div class="daycontent">请完成第一节和第二节习题</div>
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
      questionBank: [
        {
          'part': '第一节',
          'description': '本节主要讲解数据结构',
          'work': {
            'title': '数据结构',
            'data': [
              {
                'name': '数据类型',
                'choice': ['int', 'float', 'double', 'short'],
                'state': 0
              },
              {
                'name': '链表类型',
                'choice': ['单链表', '循环链表', '双链表', '无选项']
              },
              {
                'name': 'int有四个字节',
                'judge': ['对', '错']
              },
              {
                'name': '阅读程序写出结果',
                'readprogramma': [
                  "var fn = function(a, b, c) {\n    return a + b + c\n};\nconsole.log(curryIt(fn)(1)(2)(3)); //6\n\nfunction curryIt(fn) {\n    //以下应掏空\n    if(typeof fn !== 'function') throw new Error(\"curryIt():fn must be function\");\n    var len = fn.length; //获取函数形参数量\n    var slice = Array.prototype.slice;\n    var arg = slice.call(arguments, 1);\n    return function() {\n        arg = arg.concat(slice.call(arguments));\n        if(arg.length < len) { //当等于函数需要的形参数量时候调用\n            return arguments.callee;\n        }else{\n            return fn.apply(null,arg);\n        }\n    }\n}"
                ]
              },
              {
                'name': '请根据要求补全下面的程序',
                'completeprogramma': [
                  '已知fn为一个预定义函数，实现函数curryIt\nvar fn = function(a, b, c) {\n    return a + b + c\n};\ncurryIt(fn)(1)(2)(3); //6\n\nfunction curryIt(fn) {\n    //这里补充\n}'
                ]
              },
              {
                'name': '编程题',
                'writeProgramma': [
                  '给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false'
                ]
              }
            ]
          }
        },
        {
          'part': '第二节',
          'description': '本节主要讲解单链表',
          'work': {
            'title': '单链表',
            'data': [
              {
                'name': '数据类型',
                'choice': ['int', 'float', 'double', 'short']
              },
              {
                'name': '链表类型',
                'choice': ['单链表', '循环链表', '双链表', '无选项']
              },
              {
                'name': 'int有四个字节',
                'judge': ['对', '错']
              }
            ]
          }
        }
      ], // 题库
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
  box-sizing border-box
  width 100%
  position absolute
  height 100vh
  background #808080
  bottom 50px
  padding 50px 0 0 0
  overflow hidden
  .task
    display flex
    align-items center
    height 50px
    margin-bottom 20px
    background-color #808080
    .tips
      flex 0 0 32px
      justify-content center
      border-right 1px solid black
      margin-left 20px
      padding-right 20px
      box-sizing content-box
    .daycontent
      flex 1
      text-align left
      margin-left 40px
  .content
    position absolute
    top 120px
    bottom 0
    left 0
    right 0
    overflow hidden
    transition all 0.3s
    .wrapper
      height 100%
      .module-wrapper
        display flex
        margin 0 20px 0 20px
        height 80px
        margin-bottom 10px
        border 1px solid black
        border-radius 10px
        text-align center
        align-items center
        justify-content center
        .chapter
          flex 0 0 80px
          padding 10px 0
          border-right 1px solid
        .description
          flex 1
          padding 0 5px
          text-align left
</style>
