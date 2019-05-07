<template>
  <div>
    <div class="textWrapper">
      <div style="margin-bottom:8px">
        <span class="desc">
          题目
        </span>
        <Input v-model="title"
               placeholder="Enter something..."
               style="width: 200px" />
      </div>
      <div style="margin-bottom:8px">
        <span class="desc">程序</span>
        <Input v-model="description"
               type="textarea"
               :autosize="{minRows: 2,maxRows: 5}"
               placeholder="Enter something..."
               style="margin-top:10px"></Input>
      </div>
    </div>
    <div class="answer">
      <div style="margin-bottom:8px">
        <span class="desc">
          答案
        </span>
        <Input v-model="answer"
               type="textarea"
               :autosize="{minRows: 2,maxRows: 5}"
               placeholder="Enter something..."
               style="margin-top:10px;" />
      </div>
      <div class="submitConfirm">
        <Button type="primary"
                @click="ok"
                style="float:right">确定</Button>
        <Button type="primary"
                ghost
                @click="cancel"
                style="float:right;margin-right:10px">取消</Button>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '',
      description: '',
      answer: ''

    }
  },
  methods: {
    ok () {
      console.log(this.answer)
      this.description = this.answer
      this.$Message.info('录入成功')
      this.$emit('success')
    },
    cancel () {
      this.$Message.info('已取消录入')
    }
  }
}
</script>
<style scoped>
.textWrapper {
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  box-shadow: 1px 2px 5px 5px rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 10px;
  background: rgba(235, 219, 219, 0.5);
}
.desc {
  display: inline-block;
  width: 35px;
  text-align: center;
}
.answer {
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  box-shadow: 1px 2px 5px 5px rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 10px;
  background: rgba(235, 219, 219, 0.5);
}
.submitConfirm {
  margin: 0 auto;
  margin-top: 10px;
  width: 80%;
  overflow: hidden;
}
</style>
