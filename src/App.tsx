import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { GlobalStyles } from './GlobalStyles'
import { router } from './router'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  )
}

export default App
