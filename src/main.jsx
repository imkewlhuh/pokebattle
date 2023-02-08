import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { getPokemonInfo } from './api/index.js'
import Arena from './pages/layout.jsx'
import DexEntry from './pages/dex.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Arena />,
  },
  {
    path: "/dex/:name",
    element: <DexEntry />,
    loader: ({ params }) => {
      const mon = params.name;
      return getPokemonInfo(mon);
    }
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)