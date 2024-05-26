## Quick Start

## Install

#### NPM installation

> npm install element-plus-schema-form

#### Import components via ESM

```
import { SchemaForm, SchemaFormItem } from 'element-plus-form-schema'
```

## Basic usage

Here is an example using a simple form with only one input box

<script setup>
import { SchemaForm, useForm } from '../packages/schema-form'
const schemas = [
  {
    field: 'field1',
    component: 'Input',
    label: 'Field 1',
    required: true
  }
]
</script>

<div class='md-component'>
  <div class='md-component-item'>
    <SchemaForm :schemas=schemas label-width="70px" />
  </div>
<details>
<summary>show code</summary>

```html
<template>
  <SchemaForm :schemas="schemas" label-width="70px" />
</template>
<script>
  import { defineComponent } from "vue";
  import { SchemaForm } from "element-plus-schema-form";
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
      return { schemas };
    },
  });
</script>
```

</details>
</div>
