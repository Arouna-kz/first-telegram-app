import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Ajouter
import WebApp from '@twa-dev/sdk'

WebApp.ready(); //est une méthode qui informe l'application Telegram que la mini-application est prête à être affichée.
// Fin

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
