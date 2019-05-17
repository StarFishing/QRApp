<template>
  <div class="progress">
    <div class="circleProgress">
      <i-Circle :percent="80"
                :size="100"
                trail-color="#23231c5c">
        <span class="demo-Circle-inner"
              style="font-size:24px">80%</span>
        <div class="demo-Circle-inner"
             style="font-size:18px">任务进度</div>
      </i-Circle>
      <span class="link"></span>
      <i-Circle :percent="60"
                stroke-color="#5cb85c"
                :size="100"
                trail-color="#23231c5c">
        <Icon v-if="false"
              type="ios-checkmark"
              size="60"
              style="color:#5cb85c"></Icon>
        <span class="demo-Circle-inner"
              style="font-size:24px">60%</span>
        <div class="demo-Circle-inner"
             style="font-size:18px">课程进度</div>
      </i-Circle>
    </div>
    <div class="wrongsubject">
      <div class="title">错题整理</div>
      <div class="capter">
        <span class="iconCapter"></span>
        <span style="line-height:30px;margin:0 20px">按照章节顺序查看</span>
        <Button type="primary"
                @click="capterorder">查看结果</Button>
      </div>
      <div class="time">
        <span class="iconTime"></span>
        <span style="line-height:30px;margin:0 20px">按照时间顺序查看</span>
        <Button type="primary"
                @click="timeorder">查看结果</Button>
      </div>

    </div>
    <div class="wrongsubject">
      <div class="title">错误挑战</div>
      <div class="random">
        <span class="iconRandom"></span>
        <span style="line-height:30px;margin:0 20px">随机抽取十道错题</span>
        <Button type="primary"
                @click="random">开始抽取</Button></div>
      <div class="order">
        <span class="iconOrder"></span>
        <span style="line-height:30px;margin:0 20px">按照章节抽取题目</span>
        <Button type="primary"
                @click="order">开始抽取</Button>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    capterorder () {
      this.$router.push({ path: `/progress/1/getprogress` }) // -> /user/123
      this.$Message.info('章节结果查看成功')
    },
    timeorder () {
      this.$router.push({ path: `/progress/2/getprogress` })
      this.$Message.info('时间结果查看成功')
    },
    random () {
      this.$router.push({ path: `/progress/3/getprogress` })
      this.$Message.info('随机抽取完成')
    },
    order () {
      this.$router.push({ path: `/progress/4/getprogress` })
      this.$Message.info('顺序抽取完成')
    }
  },
  components: {
  }
}
</script>
<style scoped>
.progress {
  padding-top: 50px;
  padding-bottom: 50px;
}
.link {
  display: inline-block;
  background-image: url("../../assets/关联.svg");
  width: 80px;
  height: 80px;
  background-size: 80px 80px;
}
.circleProgress {
  /* margin: 0 auto;
  text-align: center; */
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.wrongsubject {
  border-radius: 10px;
  padding: 5px 10px;
  width: 80%;
  margin: 0 auto;
  min-height: 150px;
  box-shadow: 1px 2px 5px 5px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  background: #4c525f;
}
.wrongsubject .title {
  height: 30px;
  line-height: 30px;
  text-align: center;
  /* border-bottom: 1px solid black; */
  font-family: cursive;
}
.wrongsubject .title::after {
  content: "";
  display: block;
  background: linear-gradient(to right, #ea9ba4, #3562ad);
  width: 100%;
  height: 2px;
}
.wrongsubject .time,
.wrongsubject .capter,
.wrongsubject .random,
.wrongsubject .order {
  margin-top: 15px;
  height: 30px;
  display: flex;
}
.iconTime {
  display: inline-block;
  width: 30px;
  height: 30px;
  background-image: url("../../assets/时间.svg");
  background-size: 30px 30px;
}
.iconCapter,
.iconOrder {
  display: inline-block;
  width: 30px;
  height: 30px;
  background-image: url("../../assets/章节&课程.svg");
  background-size: 30px 30px;
}
.iconRandom {
  display: inline-block;
  width: 30px;
  height: 30px;
  background-image: url("../../assets/随机.svg");
  background-size: 30px 30px;
}
</style>
