import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyTest from './MyTest.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <img src="/src/assets/react.svg" />
    <MyTest />
  </StrictMode>,
)

/*
const root = createRoot(document.getElementById("root"))

root.render(
  <img src="/src/assets/spam.png" />
  <StrictMode>
    <MyTest />
  </StrictMode>,
)
*/