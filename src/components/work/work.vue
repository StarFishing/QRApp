<template>
  <div class="work">
    <div style="overflow:hidden">
      <span class="icon"
            @click="scanstart"></span>
    </div>
    <transition name="slide">
      <div class="camera"
           v-if="isshow">
        <span class="back"
              @click="backTo"></span>
        <div id="bcid">
        </div>

      </div>
    </transition>
    <div class="taskProgress">
      <p style="margin-bottom:5px;text-align:center">个人信息</p>
      <div style="text-align: center;margin-bottom:8px">
        <span style="display: inline-block;width: 40%;text-align: center;">姓名:</span>
        <p style="display: inline-block;width: 40%;text-align: center;">{{user?user.name:'小明'}}</p>
      </div>
      <div style="text-align: center;margin-bottom:8px">
        <span style="display: inline-block;width: 40%;text-align: center;">学号:</span>
        <p style="display: inline-block;width: 40%;text-align: center;">{{user?user.stuId:'3150611017'}}</p>
      </div>
      <div style="text-align: center;margin-bottom:8px">
        <span style="display: inline-block;width: 40%;text-align: center;">班级:</span>
        <p style="display: inline-block;width: 40%;text-align: center;">{{user?user.class:'物联网1502'}}</p>
      </div>
    </div>
    <div class="taskProgress">
      <p style="margin-bottom:5px;text-align:center">任务完成情况</p>
      <Progress :percent="user?user.currentTsk:30" />
      <p style="margin-top:10px; margin-bottom:5px;text-align:center">正确率</p>
      <Progress :percent="user?user.rightPercent:30"
                status="active" />
    </div>
    <div class="taskProgress"
         style="text-align:center">
      <p style="margin-bottom:5px;text-align:center">学习总进度</p>
      <i-Circle :percent="user?user.Allprogress:80">
        <span class="demo-Circle-inner"
              style="font-size:24px">{{user?user.Allprogress:80}}%</span>
      </i-Circle>
    </div>

    <!-- <p class="decode-result">Last result: <b>{{ result }}</b></p> -->

  </div>
</template>
<script>
// import { get } from '@/base/api/axios'
let scan = null
export default {
  data () {
    return {
      information: [
        {
          'name': '成龙',
          'stuId': '3150611011',
          'class': '物联网1502',
          'currentTsk': 25,
          'rightPercent': 80,
          'Allprogress': 40
        },
        {
          'name': '汪峰',
          'stuId': '3150611082',
          'class': '物联网1502',
          'currentTsk': 90,
          'rightPercent': 80,
          'Allprogress': 80
        },
        {
          'name': '李连杰',
          'stuId': '3150614011',
          'class': '物联网1501',
          'currentTsk': 70,
          'rightPercent': 80,
          'Allprogress': 50
        },
        {
          'name': '张杰',
          'stuId': '3150611022',
          'class': '物联网1501',
          'currentTsk': 80,
          'rightPercent': 70,
          'Allprogress': 80
        }
      ],
      user: null,
      result: '',
      isshow: false,
      noStreamApiSupport: false,
      codeUrl: ''
    }
  },
  created () {
    // get('/student').then((data) => {
    //   this.information = data.data
    // })
  },
  methods: {
    scanstart () {
      this.isshow = true
      // this.startRecognize()
    },
    backTo () {
      // console.log(this.result)
      this.isshow = false
      this.closeScan()
    },
    // 创建扫描控件
    startRecognize () {
      let that = this
      console.log('start')
      if (!window.plus) return
      // eslint-disable-next-line
      scan = new plus.barcode.Barcode('bcid')
      scan.onmarked = onmarked

      function onmarked (type, result, file) {
        switch (type) {
          // eslint-disable-next-line
          case plus.barcode.QR:
            type = 'QR'
            break
          // eslint-disable-next-line
          case plus.barcode.EAN13:
            type = 'EAN13'
            break
          // eslint-disable-next-line
          case plus.barcode.EAN8:
            type = 'EAN8'
            break
          default:
            type = '其它' + type
            break
        }
        // 获得code
        result = result.replace(/\n/g, '')
        that.codeUrl = result
        console.log(result + '  jieguo')
        that.handleResult(result)
      }
    },
    // 开始扫描
    startScan () {
      if (!window.plus) return
      scan.start()
    },
    // 关闭扫描
    cancelScan () {
      if (!window.plus) return
      scan.cancel()
    },
    // 关闭条码识别控件
    closeScan () {
      if (!window.plus) return
      scan.close()
    },
    handleResult (result) {
      console.log('name')
      for (let i = 0; i < this.information.length; i++) {
        console.log(this.information[i].name)
        if (this.information[i].stuId === result) {
          this.closeScan()
          this.isshow = false
          this.user = this.information[i]
          break
        }
      }
      if (this.isshow === true) {
        this.$Message.info('二维码无效')
        this.startScan()
      }
    }
  },
  components: {
  },
  watch: {
    isshow: function () {
      let that = this
      // that.startRecognize()
      function plusReady () {
        // var ws = plus.webview.currentWebview() // pw回车可输出plus.webview
        setTimeout(function () {
          that.startRecognize()
        }, 100)
      }
      if (this.isshow === true) {
        // 扩展API是否准备好，如果没有则监听“plusready"事件
        if (window.plus) {
          plusReady()
        } else {
          document.addEventListener('plusready', plusReady, false)
        }
        // 扩展API准备完成后要执行的操作
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.work
  box-sizing border-box
  width 100%
  position absolute
  height 100vh
  background url('../../assets/bg1.jpeg')
  bottom 50px
  padding 50px 0 0 0
  overflow hidden
  background-repeat round
  .slide-enter-active, .slide-leave-active
    transition all 0.3s
  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)
  .icon
    margin 5px 0px 5px 10px
    width 35px
    height 30px
    display inline-block
    float left
    background-image url('../../assets/扫一扫.png')
    background-size 35px 30px
    background-repeat no-repeat
  .camera
    position relative
    width 100%
    height 100%
    margin-top -40px
    background url('../../assets/bg1.jpeg')
    overflow hidden
    background-repeat no-repeat
    background-size cover
    .back
      display inline-block
      width 30px
      height 30px
      background-image url('../../assets/返回.png')
      background-size 30px 30px
      margin-left 5px
      margin-top 10px
    #bcid
      width 100%
      position absolute
      left 0
      right 0
      top 80px
      bottom 20px
      text-align center
      color #fff
      background none
  .full
    position relative
    top 80px
  .taskProgress
    padding 10px
    background #ffffff91
    border-radius 10px
    width 90%
    margin 0 auto
    margin-top 20px
</style>
