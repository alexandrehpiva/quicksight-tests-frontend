import React from 'react'
import DefaultPage from '../../components/DefaultPage'
import { Detail } from '../../components/DefaultPage/Detail'

const Home: React.FC = () => {
  return (
    <DefaultPage>
      <Detail>
        <h1>Home</h1>
      </Detail>
    </DefaultPage>
  )
}

export default Home
