import mockData from '@/utils/mock-api'

const login = (payload: any): Promise<any> => {
  if (payload.userName === 'admin' && payload.password === '123456') {
    return mockData({
      data: {
        token: 'SH6643HDHJSGFJSD73475674856'
      },
      duration: 1000
    })
  }
  return mockData({
    error: {
      statusText: 'USERNAME_OR_PASSWORD_INCORRECT'
    },
    duration: 1000
  })
}

export { login }
