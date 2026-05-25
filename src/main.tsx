import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { reportEnvIssuesInDev } from './lib/envConfig'
import { bootstrapConsolePreferencesDom } from './features/console-preferences/ConsolePreferencesContext'

reportEnvIssuesInDev()
bootstrapConsolePreferencesDom()

const container = document.getElementById('root')!
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
