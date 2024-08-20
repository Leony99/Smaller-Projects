import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.css'

import Calculator from './components/Calculator'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
)
