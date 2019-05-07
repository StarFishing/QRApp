<template>
  <div class="progress">
    <h1 style="
    text-align: center;
    font-size: 20px;
    line-height: 40px;
    font-family: sans-serif;
    color:white">添加题库</h1>
    <div class="choice">
      <label for="">类型</label>
      <Select v-model="model1"
              style="width:200px">
        <Option v-for="item in cityList"
                :value="item.value"
                :key="item.value">{{ item.label }}</Option>
      </Select>
      <Button type="primary"
              @click="getlabel">确定</Button>
    </div>
    <choice-question v-if="choiceName==='选择题'"
                     @success='success'></choice-question>
    <judge-question v-if="choiceName==='判断题'"
                    @success='success'></judge-question>
    <programme-question v-if="choiceName==='编程题'"
                        @success='success'></programme-question>
    <comprogramme-question v-if="choiceName==='完善程序'"
                           @success='success'></comprogramme-question>
    <readprogramme-question v-if="choiceName==='阅读程序'"
                            @success='success'></readprogramme-question>
    <div v-show="choiceName=='circle'"
         class="successWrapper">
      <i-Circle :percent="100"
                stroke-color="#5cb85c">
        <Icon type="ios-checkmark"
              size="60"
              style="color:#5cb85c"></Icon>
      </i-Circle>
    </div>
  </div>
</template>
<script>
import choiceQuestion from '@/components/choiceQuestion/choiceQuestion'
import judgeQuestion from '@/components/judgeQuestion/judgeQuestion'
import programmeQuestion from '@/components/programmeQuestion/programmeQuestion'
import comprogrammeQuestion from '@/components/comprogrammeQuestion/comprogrammeQuestion'
import readprogrammeQuestion from '@/components/readprogrammeQuestion/readprogrammeQuestion'
export default {
  data () {
    return {
      cityList: [
        {
          value: '选择题',
          label: '选择题'
        },
        {
          value: '判断题',
          label: '判断题'
        },
        {
          value: '完善程序',
          label: '完善程序'
        },
        {
          value: '阅读程序',
          label: '阅读程序'
        },
        {
          value: '编程题',
          label: '编程题'
        }
      ],
      model1: '选择题',
      choiceName: ''
    }
  },
  components: {
    choiceQuestion,
    judgeQuestion,
    programmeQuestion,
    comprogrammeQuestion,
    readprogrammeQuestion
  },
  methods: {
    getlabel () {
      let choice = this.model1
      this.choiceName = choice
    },
    success () {
      this.choiceName = 'circle'
    }
  }
}
</script>
<style scoped>
.choice {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  margin-top: 30px;
}
.progress {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 50px;
  background: url("../../assets/bg1.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
}
.successWrapper {
  text-align: center;
  margin-top: 100px;
}
</style>
