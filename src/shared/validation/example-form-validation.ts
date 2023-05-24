import * as yup from 'yup'

const exampleFormValidation = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  firstAddress: yup.string(),
  secondAddress: yup.string(),
  // gender: yup.string().required('required'),
  // checkbox: yup.array().min(1, 'minimum 1 item').required('required'),
  phone: yup.string(),
  // email: yup.string().required('required').email('email is not correct'),
  email: yup.string(),
  position: yup.string(),
  dateOfBirth: yup.string(),
  description: yup.string()
  // avatar: ,
})

export { exampleFormValidation }
