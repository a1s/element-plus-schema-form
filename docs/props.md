## FormSchema

> In addition to the following parameters, attributes described in the official documents are also supported. For details, please refer to [element-plus form](https://element-plus.org/en-US/component/form.html)

| Properties          | Type                  | Description                                                                |
| ------------------- | --------------------- | -------------------------------------------------------------------------- |
| showResetButton     | `boolean`             | Whether to display the reset button                                        |
| resetButtonOptions  | `object`              | The `label` member is rendered as the button text, other options are passed to [ElButton](https://element-plus.org/en-US/component/button.html) |
| showSubmitButton    | `boolean`             | Whether to display the submit button                                       |
| submitButtonOptions | `object`              | The `label` member is rendered as the button text, other options are passed to [ElButton](https://element-plus.org/en-US/component/button.html) |
| resetFunc           | `() => Promise<void>` | Handler function for the reset button action                               |
| submitFunc          | `() => Promise<void>` | Handler function for the submit button action                              |

## FormSchemaItem

| Properties             | Type                 | Description                                                              |
| ---------------------- | -------------------- | ------------------------------------------------------------------------ |
| field                  | `string`             | Field name                                                               |
| label                  | `string`             | Label text                                                               |
| changeEvent            | `string`             | Name of the form update event                                            |
| helpMessage            | `string`             | Text for a tooltip besides the field label                               |
| helpComponentProps     | `HelpComponentProps` | The el-tootip props for the help text                                    |
| labelWidth             | `string`             | labelWidth prop for el-form                                              |
| component              | `string`             | Field component name                                                     |
| componentProps         | `any｜()=>{}`        | props for the field component                                            |
| rules                  | `ValidationRule[]`   | Field validation rules, see Element Plus forms                           |
| required               | `boolean`            | Short-cut for [{required:true}] in validation rules                      |
| itemProps              | `any`                | props for [FormItem](https://element-plus.org/en-US/component/form.html) |
| colProps               | `ColEx`              | props for [ElCol](https://element-plus.org/en-US/component/layout.html)  |
| defaultValue           | `object`             | The initial value of the rendered component                              |
| render                 | `Function`           | Custom rendering for the FormItem                                        |
| renderColContent       | `Function`           | Custom rendering for the input control                                   |
| renderComponentContent | `Function`           | Custom rendering for the input control value                             |
| slot                   | `string`             | Template for input control slot                                          |
| show                   | `boolean`            | Show/hide by means of CSS, preserving DOM                                |
| ifShow                 | `boolean`            | Show/hide by means of JavaScript, delete DOM node if not shown           |
| dynamicDisabled        | `Function`           | Dynamically determine whether input is disabled                          |
| dynamicRules           | `Function`           | Dinamically change input verification rules                              |
