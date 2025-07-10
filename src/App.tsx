import React from 'react'
import { GlobalCss } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Components/Header'
import Apresentacao from './Containers/Apresentacao'
import ListaDeProduto from './Containers/ListaDeProduto'
import Footer from './Components/Footer'
import Restaurante from './pages/Restaurante'
import Home from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/restaurante/LaDolceVitta',
    element: <Restaurante />
  },
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
