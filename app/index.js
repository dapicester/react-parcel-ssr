import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

export const Main = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

const element = document.getElementById('app')

// In production, we want to use server-side rendering.
if (process.env.NODE_ENV === 'production') {
  ReactDOM.hydrate(Main, element)
} else {
  ReactDOM.render(Main, element)
}

if (module.hot) {
  module.hot.accept()
}
