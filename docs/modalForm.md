## Pop-up form

<script setup>
import { SchemaForm, useForm } from '../packages/schema-form'
import { ref } from 'vue'
const schemas = [
  {
    field: 'field1',
    component: 'Input',
    label: 'Field 1',
    required: true
  }
]

const resetFunc = async () => {
  await resetFields()
}

const onSubmit = async () => {
  const res = await validate()
  alert(JSON.stringify(res))
  dialogFormVisible.value = false
  await resetFields()
}

const [register, {resetFields, validate}] = useForm({
  schemas,
  labelWidth: "70px",
  showActionButtonGroup: false,
})
let dialogFormVisible = ref(false)

</script>

<div class='md-component'>
  <div class='md-component-item'>
    <el-button @click="dialogFormVisible = true">Open Dialog</el-button>
    <el-dialog title="Pop-up form" v-model="dialogFormVisible" @close="resetFunc">
      <SchemaForm @register="register" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="resetFunc">Reset</el-button>
          <el-button type="primary" @click="onSubmit">OK</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
<details>
<summary>show code</summary>

```html
<template>
  <el-button @click="dialogFormVisible = true">Open Dialog</el-button>
  <el-dialog title="Pop-up form" v-model="dialogFormVisible" @close="resetFunc">
    <SchemaForm @register="register" />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="resetFunc">Reset</el-button>
        <el-button type="primary" @click="onSubmit">OK</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
  import { defineComponent } from "vue";
  import { SchemaForm, useForm } from "element-plus-schema-form";
  const schemas = [
    {
      field: "field1",
      component: "Input",
      label: "Field 1",
      required: true,
    },
  ];
  export default defineComponent({
    components: { SchemaForm },
    setup() {
      let dialogFormVisible = ref(false);
      const resetFunc = async () => {
        await resetFields();
      };

      const onSubmit = async () => {
        const res = await validate();
        console.log(res);
        dialogFormVisible.value = false;
      };

      const [register, { resetFields, validate }] = useForm({
        schemas,
        labelWidth: "70px",
        showActionButtonGroup: false,
      });
      return { dialogFormVisible, register };
    },
  });
</script>
```

</details>
</div>
