<template>
  <div class="homepage-hero-module">
    <div class="video-container">
      <div :style="fixStyle"
           class="filter"></div>
      <video :style="fixStyle"
             autoplay
             loop
             class="fillWidth"
             v-on:canplay="canplay">
        <source src="./src/MP4/Lonely-Blue.mp4"
                type="video/mp4" />
        浏览器不支持 video 标签，建议升级浏览器。
        <source src="./src/WEBM/Lonely-Blue.webm"
                type="video/webm" />
        浏览器不支持 video 标签，建议升级浏览器。
      </video>
      <div class="poster hidden"
           v-if="!vedioCanPlay">
        <img :style="fixStyle"
             src="./src/Snapshots/Lonely-Blue.jpg"
             alt="">
      </div>
    </div>
    <div class='login'
         v-if='!resetpwdflag'>
      <div class="header-main">
        <h2>用户登陆</h2>
        <div class="header-bottom">
          <div class="header-right w3agile">
            <div class="header-left-bottom agileinfo">
              <form>
                <div class="icon1">
                  <input type="text"
                         placeholder="用户名"
                         required=""
                         ref="name" />
                </div>
                <div class="icon1">
                  <input type="password"
                         placeholder="密码"
                         required=""
                         ref="pwd" />
                </div>
                <div class="login-check">
                  <label class="checkbox"><input type="checkbox"
                           name="checkbox"
                           checked=""
                           ref="rember"
                           @click="remember"><i> </i> 记住账号密码</label>
                </div>
                <div class="bottom">
                  <span @click="loging">登陆</span>
                </div>
                <!-- <p><a href="#"
                     @click="changestate">忘记密码?</a></p> -->
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<style scoped>
/* @import "./src/login.css"; */
@import "../../common/login-style/login.css";
.login {
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  bottom: 0;
}
.homepage-hero-module,
.video-container {
  background: #548692;
  height: 100vh;
  overflow: hidden;
  position: relative;
  z-index: 999;
}

.video-container .poster img,
.video-container video {
  z-index: 0;
  position: absolute;
}

.video-container .filter {
  z-index: 1;
  position: absolute;
  background: rgba(82, 93, 95, 0.22);
}
</style>
<script>
/*eslint-disable*/
import * as oatu from '@/api/permission.js'
export default {
  name: 'login',
  data () {
    return {
      vedioCanPlay: false,
      fixStyle: '',
      name: '',
      pwd: '',
      rememberPassword: false,
      resetpwdflag: false
    }
  },
  methods: {
    canplay () {
      this.vedioCanPlay = true
    },
    loging () { // 点击登陆进行用户验证
      let obj = this._getFormat()
      if (!obj) return
      else {
        this.name = obj.username
        this.pwd = obj.password
        if (this.name === "张杰" && this.pwd === "zhangjie") {
          this.$Message.info("登陆成功")
          this.$router.push({
            name: 'Home'
          })
          return
        }
        if (this.name === "成龙" && this.pwd === "chenglong") {
          this.$Message.info("登陆成功")
          this.$router.push({
            name: 'Home'
          })
          return
        }
        if (this.name === "汪峰" && this.pwd === "wangfeng") {
          this.$Message.info("登陆成功")
          this.$router.push({
            name: 'Home'
          })
          return
        }
        this.$Message.error("账户不存在")
        return

      }
    },
    _getFormat () {
      // 设置用户
      let userName = this.$refs.name.value
      let pwd = this.$refs.pwd.value
      return oatu.InputValidation(userName, pwd)
    },
    remember () {
      this.rememberPassword = this.$refs.rember.checked
    },
    changestate () {
      this.resetpwdflag = true
    }
  },
  mounted: function () {
    // 用户上次登录如果记住了密码，则直接填充

    window.onresize = () => {
      const windowWidth = document.body.clientWidth
      const windowHeight = document.body.clientHeight
      const windowAspectRatio = windowHeight / windowWidth
      let videoWidth
      let videoHeight
      if (windowAspectRatio < 0.5625) {
        videoWidth = windowWidth
        videoHeight = videoWidth * 0.5625
        this.fixStyle = {
          height: windowWidth * 0.5625 + 'px',
          width: windowWidth + 'px',
          'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
          'margin-left': 'initial'
        }
      } else {
        videoHeight = windowHeight
        videoWidth = videoHeight / 0.5625
        this.fixStyle = {
          height: windowHeight + 'px',
          width: windowHeight / 0.5625 + 'px',
          'margin-left': (windowWidth - videoWidth) / 2 + 'px',
          'margin-bottom': 'initial'
        }
      }
    }
    window.onresize()
  }
}
</script>
