import React from 'react'
import ReactDOM from 'react-dom'

import RoutesComponent from '@/app/router'
import '@/assets/styles/main.scss'

// Tạo component App
function App() {
  return <RoutesComponent />
}
ReactDOM.render(<App />, document.getElementById('root'))
