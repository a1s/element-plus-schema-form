## Methods

> For specific cases of the method, please view [Basic Form](http://localhost:3000/#/example) [Source Code Address](https://github.com/WsmDyj/element-plus-schema-form/blob/main/examples/views/home/components/schema-form.vue)

#### 1. getFieldsValue

Return an object containing input values for all fields.

```
const [register, { getFieldsValue }] = useForm({ schemas })
const res = await getFieldsValue()
```

#### 2. setFieldsValue

Set form field values, often used to echo input data.

```
const [register, { setFieldsValue }] = useForm({ schemas })
let defVal = { field1: 'I am the echo value' }
setFieldsValue(defVal)
```

#### 3. resetFields

Reset the form to initial values.  Field defaults will be preserved.

```
const [register, { resetFields }] = useForm({ schemas })
setFieldsValue(defVal)
```

#### 4. validateFields

Validate specified fields. The argument may be a field name or an array of field names.

```
const [register, { validateFields }] = useForm({ schemas })
validateFields(['field18'])
```

#### 5. validate

Validate the form.  If the validation is successful, return the input object, same as `getFieldsValue`.  If the validation fails, return `false`.

```
const [register, { validate }] = useForm({ schemas })
await validate()
```

#### 6. submit

Submit the form.

```
const [register, { submit }] = useForm({ schemas })
await submit()
```

#### 7. clearValidate

Clear validation results.  A field name or an array of field names may be passed to clear errors partially.

```
const [register, { clearValidate }] = useForm({ schemas })
await clearValidate()
```

#### 8. setProps

[ElForm](https://element-plus.org/en-US/component/form.html) props can be specified on the template element, and also can be applied by calling `setProps`, or by calling `useForm(props)` in setup script.

```
const [register, { setProps }] = useForm({ schemas })
await setProps({ textAlign: 'right' })
```

#### 9. removeSchemaByFiled

Delete fields from the schema.  The argument may be a string for one field, or an array of strings for multiple fields.

```
const [register, { removeSchemaByFiled }] = useForm({ schemas })
await removeSchemaByFiled('field1')
```

#### 10. appendSchemaByField

Insert new field schema after the specified field. If the field name is not passed, new field is added to the end of the form or, if the third argument is `true`, inserted at the beginning of the form.

```
const [register, { appendSchemaByField }] = useForm({ schemas })
await appendSchemaByField({
  field: 'field10',
  label: 'Field 2',
  component: 'Input'
}, 'field1')
```
