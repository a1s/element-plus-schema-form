
<template>
  <div>Payment account：{{info.account}}</div>
  <div>Payee name：{{info.payeeName}}</div>
  <div>Transfer amount：{{info.money}}</div>
  <div>Payment method：{{info.pay}}</div>
</template>

<script>
import { defineComponent } from 'vue'
 export default defineComponent({
   props: ['info'],
   setup() {}
 })

</script>

<style>

</style>
