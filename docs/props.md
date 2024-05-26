## FormSchema

> In addition to the following parameters, attributes described in the official documents are also supported. For details, please refer to [element-plus form](https://element-plus.org/en-US/component/form.html)

| Properties          | Type                  | Description                                                        |
| ------------------- | --------------------- | ------------------------------------------------------------------ |
| showResetButton     | `boolean`             | Whether to display the reset button                                |
| resetButtonOptions  | `object`              | See the reset button configuration below ActionButtonOption        |
| showSubmitButton    | `boolean`             | Whether to display the submit button                               |
| submitButtonOptions | `object`              | See ActionButtonOption below for confirmation button configuration |
| resetFunc           | `() => Promise<void>` | Custom reset button logic `() => Promise<void>;`                   |
| submitFunc          | `() => Promise<void>` | Custom submit button logic `() => Promise<void>;`                  |

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
