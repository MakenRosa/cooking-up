import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { IngredientsProvider } from './components/IngredientsContext/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IngredientsProvider>
      <App />
    </IngredientsProvider>
  </React.StrictMode>,
)
