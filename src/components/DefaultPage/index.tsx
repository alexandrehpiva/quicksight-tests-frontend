import { FCC } from '../../typings/global'
import { Detail } from './Detail'
import { Sidebar } from './Sidebar'
import { Main } from './styles'

const DefaultPage: FCC = ({ children }) => {
  return (
    <>
      <Main>
        <Sidebar />
        <Detail>{children}</Detail>
      </Main>
    </>
  )
}

export default DefaultPage
