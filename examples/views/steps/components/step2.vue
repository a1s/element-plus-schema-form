
<template>
  <schema-form  @register="register" />
</template>

<script>
import { defineComponent } from 'vue'
import { SchemaForm, useForm } from '../../../../packages/schema-form/index'
import { step2Schemas } from '../data'
export default defineComponent({
  components: {
    SchemaForm
  },
  emits: ['next', 'prev'],
  setup(_, {emit}) {
    const [register, { validate, setProps }] = useForm({
      schemas: step2Schemas,
      labelWidth: '100px',
      resetButtonOptions: {
        label: 'Previous',
      },
      submitButtonOptions: {
        label: 'Submit',
      },
      resetFunc: customResetFunc,
      submitFunc: customSubmitFunc,
    })
    async function customResetFunc() {
      emit('prev')
    }
    async function customSubmitFunc() {
      try {
          const values = await validate();
          setProps({
            submitButtonOptions: {
              loading: true,
            },
          })
          setTimeout(() => {
            setProps({
              submitButtonOptions: {
                loading: false,
              },
            })
            emit('next', values);
          }, 1500);
        } catch (error) {}
    }
    return {
      register
    }
  }
})
</script>

