import React from 'react'
import { createRoot } from 'react-dom/client'
import * as Sentry from '@sentry/react'
import './index.css'

import App from './components/App/App.js'

Sentry.init({
  dsn: 'https://c0cce460deba46a6b64ff89c9719ba82@o141824.ingest.sentry.io/5379078',
})

const root = createRoot(document.querySelector('#root'))

root.render(<App />)
