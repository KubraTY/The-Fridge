import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import RecipesContextProvider from './components/contexts/RecipesContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecipesContextProvider>
        <MantineProvider>
          <App />
        </MantineProvider>
      </RecipesContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)