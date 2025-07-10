import React from 'react'
import { GlobalCss } from './styles'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Restaurante from './pages/Restaurante'
import Home from './pages/Home'
import { store } from './store'
import Rotas from './routes'

const rotas = Rotas

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
