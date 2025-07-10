import React from 'react'
import { GlobalCss } from './styles'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './store'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalCss />
        <Rotas />
      </Provider>
    </BrowserRouter>
  )
}

export default App
