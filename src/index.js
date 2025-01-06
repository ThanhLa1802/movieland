import React from 'react'

import { createRoot } from 'react-dom/client';
import App from './App'

const root = createRoot(document.getElementById('root'))
const a = "Test"
const b = 1
root.render(<App />)
