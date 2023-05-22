import * as yup from 'yup'

const exampleFormValidation = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  firstAddress: yup.string(),
  secondAddress: yup.string(),
  // gender: yup.string().required('required'),
  dateTime: yup.string(),
  phone: yup.string(),
  email: yup.string().required('required').email('email is not correct'),
  position: yup.string()
})

export { exampleFormValidation }
