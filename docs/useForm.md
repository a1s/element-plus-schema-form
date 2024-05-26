## useForm

The component also provides the useForm method to facilitate calling internal methods of the function.

```javascript
const [register, methods] = useForm(props);
```

### register

register is used to register useForm. If you need to use the API provided by useForm, register must be passed into the component&apos;s onRegister to obtain the form instance.

```javascript
<template>
  <BasicForm @register="register" />
</template>
```

### Usage example

```javascript
<template>
  <BasicForm @register="register" @submit="handleSubmit" />
</template>
<script>
  import { defineComponent } from 'vue'
  import { BasicForm, useForm } from 'element-plus-schema-form'
  const schemas = [
    {
      field: 'field1',
      component: 'Input',
      label: 'Field 1'
    }
  ];
  export default defineComponent({
    components: { BasicForm },
    setup() {
      const [register, { setProps }] = useForm({schemas})
      return {
        register,
        schemas,
        handleSubmit: (values) => {
          alert('click search,values:' + JSON.stringify(values))
        }
      }
    }
  })
</script>
```
