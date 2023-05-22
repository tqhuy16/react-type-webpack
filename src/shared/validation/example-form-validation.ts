import * as yup from 'yup'

const exampleFormValidation = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  firstAddress: yup.string().required('required'),
  secondAddress: yup.string().required('required')
  // gender: yup.string().required('required')
})

export { exampleFormValidation }
