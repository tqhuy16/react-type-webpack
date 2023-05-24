import * as yup from 'yup'

const exampleFormValidation = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  firstAddress: yup.string().required('required'),
  secondAddress: yup.string(),
  gender: yup.string().required('required'),
  checkbox: yup.array().min(1, 'minimum 1 item').required('required'),
  phone: yup.string(),
  email: yup.string().required('required').email('email is not correct'),
  // email: yup.string(),
  position: yup.string().required('required'),
  dateOfBirth: yup.string().required('required'),
  description: yup.string().required('required')
  // avatar: ,
})

export { exampleFormValidation }
