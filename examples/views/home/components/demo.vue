
<template>
<el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-change="handleChange"
  :file-list="fileList"
>
  <el-button size="small" type="info">Click to upload</el-button>
</el-upload>
</template>

<script>
export default {
  data () {
    return {
      fileList: []
    }
  },
  methods: {
    handleChange (file, fileList) {
      this.fileList = fileList
    }
  }
}
</script>

<style>

</style>
