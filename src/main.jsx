import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyTest from './MyTest.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyTest />
  </StrictMode>,
)
