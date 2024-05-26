## Shortened form

[comment]: # (25-may-2024 [als] cannot decipher what's meant here)
[comment]: # (DeepL translation: There are times when the form should be used in combination with other components, commonly Table, List, etc., which requires some special forms.)
[comment]: # (Google translation: Sometimes forms need to be used in combination with other components. Common ones include Table, List, etc. At this time, some special forms of forms are needed.)
有些是时候表单要与别的组件组合使用，常见的有 Table ，List 等，这时候就需要一些特殊形态的表单。

- Enable form shortening by setting **showAdvancedButton** to `true`.

- Set **autoAdvancedLine** to the number of lines shown on the shortened form.  The value may not be less than 2 lines.  Default: 3 lines.

<script setup>
import { SchemaForm, useForm} from '../packages/schema-form'
const schemas = [
  {
      field: 'field11',
      component: 'Input',
      label: 'Field 11',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'field12',
      component: 'Input',
      label: 'Field 12',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'field13',
      component: 'Input',
      label: 'Field 13',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'field1',
      component: 'Input',
      label: 'Field 1',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: 'custom placeholder',
      },
    },
    {
      field: 'field2',
      component: 'Input',
      label: 'Field 2',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'field3',
      component: 'Input',
      label: 'Field 3',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'field7',
      component: 'RadioGroup',
      label: 'Field 7',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            label: 'Option 1',
            value: '1',
          },
          {
            label: 'Option 2',
            value: '2',
          },
        ],
      },
    },
  ];
const [register] = useForm({
    schemas: schemas,
    showAdvancedButton: true,
    textAlign: 'right',
    autoAdvancedLine: 3,
    labelWidth: "70px"
  })
</script>

<div class='md-component'>
  <div class='md-component-item'>
    <SchemaForm @register="register" />
  </div>
<details>
<summary>show code</summary>

```html
<template>
  <SchemaForm @register="register" />
</template>
<script>
  export default defineComponent({
    components: { SchemaForm },
    setup() {
      const [register] = useForm({
        schemas: [...getSchamas(), ...getAppendSchemas()],
        showAdvancedButton: true,
        textAlign: "right",
        autoAdvancedLine: 3,
        labelWidth: "70px",
      });
      return { register };
    },
  });
</script>
```

</details>
</div>
