<template>
  <div class="steps-main">
    <el-steps class="steps-center" finish-status="success" :active="active">
      <el-step title="Fill in transfer information"></el-step>
      <el-step title="Confirm transfer information"></el-step>
      <el-step title="Finish"></el-step>
    </el-steps>
    <div class="mt-80">
      <Step1 @next="handleStep1Next" v-if="active === 1" />
      <Step2
        @prev="handleStepPrev"
        @next="handleStep2Next"
        v-if="active === 2"
      />
      <Step3 :info="info" v-if="active === 3"/>
    </div>
    <el-link class="link" type="primary" href="https://github.com/WsmDyj/element-plus-schema-form/blob/main/examples/views/steps/index.vue" target="_blank">Source code</el-link>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import PageHeader from '../../components/page-header.vue'
import Step1 from './components/step1.vue'
import Step2 from './components/step2.vue'
import Step3 from './components/step3.vue'
export default defineComponent({
  components: {
    PageHeader,
    Step1,
    Step2,
    Step3
  },
  setup () {
    const active = ref(1)
    const info = ref('')
    function handleStep1Next (step1Values) {
      active.value++
      info.value = step1Values
    }
    function handleStep2Next (step2Values) {
      active.value++
      console.log(step2Values)
    }
    function handleStepPrev () {
      active.value--
    }
    return { active, info,handleStep1Next,handleStep2Next, handleStepPrev }
  }
})
</script>
<style lang="less" scoped>
.link {
  position: fixed;
  top: 100px;
  left: 360px;
}
.steps-main {
  padding-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.steps-center {
  width: 100%;
}
.mt-80 {
  margin-top: 80px;
}
</style>
