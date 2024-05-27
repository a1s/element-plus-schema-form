<template>
  <el-container class="schema-container">
    <div class="schema-aside">
      <div class="schema-aside-opt">
        <el-switch class="mb-20" active-text="Show action buttons" v-model="showActionButtonGroup" @change="onChange" />
        <el-switch class="mb-20" active-text="Show reset button" v-model="showResetButton" @change="onChange" />
        <el-switch class="mb-20" active-text="Show submit button" v-model="showSubmitButton" @change="onChange" />
        <el-button class="mb-20" @click="setProps({ submitButtonOptions: { loading: true, label: 'loading' }})">Modify submit button</el-button>
        <el-button class="mb-20" @click="setProps({ resetButtonOptions: { label: 'Cancel' }})">Modify reset button</el-button>
        <el-button class="mb-20" @click="setProps({ textAlign: 'right' })">Modify button position</el-button>
        <el-button class="mb-20" @click="onGetFormModal">Get form value</el-button>
        <el-button class="mb-20" @click="onDisplay">Echo field 1</el-button>
        <el-button class="mb-20" @click="onResetFields">Reset form</el-button>
        <!-- <el-button class="mb-20" @click="onValidateFields">Verify custom verification rules</el-button> -->
        <el-button class="mb-20" @click="validateForm">Manually validate the form</el-button>
        <el-button class="mb-20" @click="resetValidate">Clear validation result</el-button>
        <el-button class="mb-20" @click="deleteField">Delete field 1</el-button>
        <el-button class="mb-20" @click="appendField">Insert field 2 after field 1</el-button>
      </div>
    </div>
    <el-main class="schema-main">
      <SchemaForm
        label-position="right"
        label-width="250px"
        @register="register"
        :rules="rules"
        @submit="handleSubmit"
        >
        <template #f3="{ model, field }">
          <el-autocomplete style="width: 100%" :fetch-suggestions="querySearchAsync" v-model="model[field]" placeholder="el-autocomplete" />
        </template>
        <template #add="{ field }">
          <el-button v-if="Number(field) === 0" @click="add">Add new</el-button>
          <el-button v-if="field > 0" @click="del(field)">Delete</el-button>
        </template>
    </SchemaForm>
    </el-main>
  </el-container>
</template>
<script>
import { defineComponent, h, reactive, ref, toRefs } from 'vue'
import { SchemaForm, useComponentRegister, useForm } from '../../../../packages/schema-form'
import { ElInput } from 'element-plus'

import demo from './demo.vue'
useComponentRegister('demo', demo)

const schemas = [
  {
    field: 'field1',
    component: 'Input',
    label: 'Field 1',
    helpMessage: 'This is field 1',
    helpComponentProps: {
      placement: 'bottom',
      icon: 'el-icon-question'
      // ... el-tooltip attributes
    },
    colProps: {
      span: 8
    },
    componentProps: {
      placeholder: 'customize placeholder',
      maxlength: 4,
      clearable: true,
      onChange: (e) => {
        console.log(e)
      }
    },
    dynamicDisabled: ({ values }) => {
      return !!values.field7
    },
    dynamicRules: ({ values }) => {
      return values.field8 ? [{ required: true, message: 'Field 1 is required' }] : []
    }
  },
  {
    field: 'field8',
    component: 'Switch',
    label: 'Is field 1 required?',
    colProps: {
      span: 8
    }
  },
  {
    field: 'field7',
    component: 'Switch',
 label: 'Whether to disable field 1',
    colProps: {
      span: 8
    }
  },
  {
    field: 'field2',
    component: 'Input',
    label: 'default value',
    colProps: {
      span: 8
    },
    defaultValue: 'defalut value',
    componentProps: {
      clearable: true
    }
  },
  {
    field: 'field18',
    component: 'Input',
    label: 'Custom verification rules',
    colProps: {
      span: 8
    },
    show: ({ values }) => {
      return !!values.field25
    },
    componentProps: {
      size: 'mini',
      suffixIcon: 'el-icon-edit-outline'
    },
    rules: [
      {
        required: true,
        validator: async (rule, value) => {
          if (!value) {
            return Promise.reject('Value cannot be empty')
          }
          if (value === '1') {
            return Promise.reject('Value cannot be 1')
          }
          return Promise.resolve()
        },
        trigger: 'change'
      }
    ]
  },
  {
    field: 'field25',
    component: 'Switch',
    label: 'Show custom verification rules',
    defaultValue: true,
    colProps: {
      span: 8
    }
  },
  {
    field: 'field16',
    component: 'Input',
    label: 'Contents of input box prefix',
    colProps: {
      span: 8
    },
    renderComponentContent: () =>{
      return {
        prepend: () => 'Http://'
      }
    }
  },
  {
    field: 'field17',
    component: 'Input',
    label: 'Contents of input box suffix',
    colProps: {
      span: 8
    },
    renderComponentContent: () =>{
      return {
        append: () => '.com'
      }
    }
  },
  {
    field: 'field3',
    component: 'Input',
    label: 'slot of custom rendering group',
    colProps: {
      span: 8
    },
    renderComponentContent: () => {
      return {
        suffix: () => '$'
      }
    }
  },
  {
    field: 'field6',
    label: 'Custom Slot-Remote Search',
    slot: 'f3',
    colProps: {
      span: 12
    }
  },
  {
    field: 'field11',
    component: 'Input',
    label: 'render mode',
    colProps: {
      span: 12
    },
    render: ({ model, field }) => {
      return h(ElInput, {
        placeholder: 'Please enter',
        modelValue: model[field],
        onInput: (e) => {
          model[field] = e
        }
      })
    }
  },
  {
    field: 'field4',
    component: 'Select',
    label: 'radio choice',
    colProps: {
      span: 8
    },
    componentProps: {
      clearable: true,
      filterable: true,
      options: [
        {
          value: 'Option 1',
          label: 'golden cake'
        }, {
          value: 'Option 2',
          label: 'double skin milk'
        }, {
          value: 'Option 3',
          label: 'oyster omelette'
        }, {
          value: 'Option 4',
          disabled: true,
          label: 'Dragon Beard Noodles'
        }, {
          value: 'Option 5',
          label: 'Beijing Roast Duck'
        }
      ],
      onChange: () => {
        //Configure request parameters
        // schemas.filter(it => it.field === 'field30')[0].componentProps.params.query = '2'
      }
    }
  },
  {
    field: 'field30',
    component: 'Select',
    label: 'remote drop-down',
    componentProps: {
      filterable: true,
      // api: getUserInfo,
      clearable: true,
      immediate: false,
      params: {}, // 请求参数
      optionKey: {
        label: 'marketName',
        value: 'marketCode'
      }
    },
    colProps: {
      span: 8
    }
  },
  {
    field: 'field29',
    component: 'Cascader',
    label: 'cascade',
    colProps: {
      span: 8
    },
    componentProps: {
      clearable: true,
      options: [
        {
          value: 1,
          label: 'Southeast',
          children: [
            {
              value: 2,
              label: 'Shanghai',
              children: [
                { value: 3, label: 'Putuo' },
                { value: 4, label: 'Huangpu' },
                { value: 5, label: 'Xuhui' }
              ]
            },
            {
              value: 7,
              label: 'Jiangsu',
              children: [
                { value: 8, label: 'Nanjing' },
                { value: 9, label: 'Suzhou' },
                { value: 10, label: 'Wuxi' }
              ]
            },
            {
              value: 12,
              label: 'Zhejiang',
              children: [
                { value: 13, label: 'Hangzhou' },
                { value: 14, label: 'Ningbo' },
                { value: 15, label: 'Jiaxing' }
              ]
            },
          ]
        },
        {
          value: 17,
          label: 'Northwest',
          children: [
            {
              value: 18,
              label: 'Shaanxi',
              children: [
                { value: 19, label: 'Xi\'an' },
                { value: 20, label: 'Yan\'an' }
              ]
            },
            {
              value: 21,
              label: 'Xinjiang Uygur Autonomous Region',
              children: [
                { value: 22, label: 'Urumqi' },
                { value: 23, label: 'Karamay' }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    field: 'field19',
    component: 'DatePicker',
    valueFormate: 'YYYY/MM/DD',
    label: 'Date',
    colProps: {
      span: 8
    },
    componentProps: {
      type: 'date',
      shortcuts: [{
        text: 'Today',
        value: new Date()
      }, {
        text: 'Yesterday',
        value: (() => {
          const date = new Date()
          date.setTime(date.getTime() - 3600 * 1000 * 24)
          return date
        })()
      }, {
        text: 'A week ago',
        value: (() => {
          const date = new Date()
          date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
          return date
        })()
      }]
    }
  },
  {
    field: 'field20',
    component: 'RangePicker',
    label: 'Date Range',
    valueFormate: 'YYYY-MM-DD',
    colProps: {
      span: 16
    },
    componentProps: {
      type: 'daterange',
      rangeSeparator: 'to',
      startPlaceholder: 'Start Date',
      endPlaceholder: 'End Date'
    },
    fieldMapToTime: ['startTime', 'endTime']
  },
  {
    field: 'field21',
    component: 'TimeSelect',
    label: 'Time',
    colProps: {
      span: 8
    },
    componentProps: {
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }
  },
  {
    field: 'field22',
    component: 'TimePicker',
    label: 'Time Range',
    colProps: {
      span: 16
    },
    componentProps: {
      isRange: true,
      rangeSeparator: 'to',
      startPlaceholder: 'Start Time',
      endPlaceholder: 'End Time'
    }
  },
  {
    field: 'f1',
    component: 'Input',
    label: 'F1',
    colProps: {
      span: 12
    },
    componentProps: ({ formModel }) => {
      return {
        placeholder: 'The value of synchronized f2 is f1',
        onInput: (e) => {
          formModel.f2 = e
        }
      }
    }
  },
  {
    field: 'f2',
    component: 'Input',
    label: 'F2-custom labelWidth',
    colProps: {
      span: 12
    },
    labelWidth: '300px',
    componentProps: {
      type: 'textarea',
      disabled: true
    }
  },
  {
    field: 'field5',
    component: 'RadioGroup',
    label: 'radio button group',
    colProps: {
      span: 8
    },
    defaultValue: 'Option1',
    componentProps: {
    options: ['Option1', 'Option2']
      // type: 'button',
      // border: true,
      // size: 'mini',
    }
  },
  {
    field: 'field26',
    component: 'CheckboxGroup',
    label: 'Multiple selection box group',
    colProps: {
      span: 8
    },
    componentProps: {
      options: [
        {
          label: 'Option 1',
          value: '3'
        },
        {
          label: 'Option 2',
          value: '4'
        }
      ]
    }
  },
  {
    field: 'field27',
    component: 'InputNumber',
    label: 'Counter',
    colProps: {
      span: 8
    }
  },
  {
    field: 'field28',
    component: 'Slider',
    label: 'Slider',
    colProps: {
      span: 8
    }
  },
  {
    field: 'field24',
    component: 'Rate',
    label: 'Rating',
    colProps: {
      span: 8
    }
  },
  {
    field: 'demo',
    component: 'demo',
    label: 'Custom registration component',
    colProps: {
      span: 8
    }
  },
  {
    field: 'field0a',
    component: 'Input',
    label: 'Field 0',
    colProps: {
      span: 12
    },
  },
  {
    field: '0',
    component: 'Input',
    labelWidth: '20px',
    label: ' ',
    colProps: {
      span: 4
    },
    slot: 'add'
  }
]
const rules = {
  field16: [
    { "required": true, "message": "Please enter name" },
    { "max": 5, "message": "Maximum 5 characters" }
  ]
}
export default defineComponent({
  components: { SchemaForm },
  setup () {
    const [register, {
      setProps,
      appendSchemaByField,
      removeSchemaByFiled,
      getFieldsValue,
      setFieldsValue,
      resetFields,
      validate,
      validateFields,
      clearValidate
    }] = useForm({ schemas: schemas })
    const opt = reactive({
      showActionButtonGroup: true,
      showResetButton: true,
      showSubmitButton: true
    })
    const formElRef = ref(null)
    const n = ref(1)
    function add () {
      appendSchemaByField(
        {
          field: `field${n.value}a`,
          component: 'Input',
          label: 'Field ' + n.value,
          colProps: {
            span: 12
          },
        },
        ''
      )
      appendSchemaByField(
        {
          field: `${n.value}`,
          component: 'Input',
          label: ' ',
          labelWidth: '20px',
          colProps: {
            span: 4
          },
          slot: 'add'
        },
        ''
      )
      n.value++
    }
    function del (field) {
      removeSchemaByFiled([`field${field}a`, `field${field}b`, `${field}`])
      n.value--
    }
    const handleSubmit = (values) => {
      console.log(values)
    }
    function querySearchAsync (queryString, cb) {
      cb([{
        value: 'Nan Quan Mama Lobster Rice Bowl',
        address: 'A13, Xinlehui Food Plaza, No. 1699 Jinshajiang Road, Putuo District'
      }])
    }
    function onChange () {
      setProps({ ...optVal })
    }
    const optVal = toRefs(opt)

    function onDisplay () {
      let defVal = { field1: 'I am the echo value' }
      setFieldsValue(defVal)
    }

    async function validateForm () {
      try {
        const res = await validate()
        console.log('passing', res)
      } catch (error) {
        console.log('not passing', error)
      }
    }
    async function onGetFormModal () {
      const res = await getFieldsValue()
      alert(JSON.stringify(res))
    }
    async function resetValidate () {
      clearValidate()
    }

    function deleteField () {
      removeSchemaByFiled('field1')
    }
    function appendField () {
      appendSchemaByField(
        {
          field: 'field10',
          label: 'Field 2',
          component: 'Input',
          colProps: {
            span: 8
          }
        },
        'field1'
      )
    }

    async function onResetFields () {
      await resetFields()
    }

    async function onValidateFields () {
      await validateFields(['field18'])
    }

    return {
      schemas,
      formElRef,
      handleSubmit,
      querySearchAsync,
      setProps,
      rules,
      deleteField,
      appendField,
      resetValidate,
      ...optVal,
      onDisplay,
      onChange,
      validateForm,
      add,
      del,
      onGetFormModal,
      register,
      onResetFields,
      onValidateFields
    }
  }
})
</script>
<style lang="less" scoped>
.schema-alert {
  margin: 10px 0 20px 0;
}
.schema-aside {
  position: fixed;
  left: 0;
  height: 100%;
  z-index: 1;
  background: #fff;
  width: 290px;
  border-right: 1px solid #eee;
  overflow: auto;
  padding-left: 35px;
  &-opt {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .el-button+.el-button {
    margin-left: 0px;
  }
}
.schema-main {
  margin: 80px 30px 20px 310px;
}
.mb-20 {
  margin-bottom: 25px;
}
</style>
