export const step1Schemas = [
  {
    field: 'account',
    component: 'Select',
    label: 'Payment account',
    required: true,
    defaultValue: 'Turbocharging',
    componentProps: {
      options: [
        {
          label: 'Turbocharging',
          value: 'Turbocharging',
        },
      ],
    },
  },
  {
    field: 'pay',
    component: 'Select',
    label: 'Payment method',
    defaultValue: 'zfb',
    componentProps: {
      options: [
        {
          label: 'zfb',
          value: 'zfb',
        },
        {
          label: 'wx',
          value: 'wx',
        },
      ],
    },
  },
  {
    field: 'payeeName',
    component: 'Input',
    label: 'Payee name',
    defaultValue: 'vc',
    required: true,
  },
  {
    field: 'money',
    component: 'Input',
    label: 'Transfer amount',
    defaultValue: '500',
    required: true,
    renderComponentContent: () => {
      return {
        prefix: () => '￥',
      };
    },
  },
];

export const step2Schemas = [
  {
    field: 'pwd',
    component: 'Input',
    label: 'Payment password',
    required: true,
    componentProps: {
      placeholder: 'Please enter payment password'
    }
  },
]
