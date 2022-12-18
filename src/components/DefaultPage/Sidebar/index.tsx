import { Link } from 'react-router-dom'
import { routes } from '../../../router/routes'
import { FCC } from '../../../typings/global'
import { Container, Item, List, Title } from './styles'

type SidebarProps = {
  title?: string
}

const getURL = () => window.location.pathname

export const Sidebar: FCC<SidebarProps> = ({ title }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <List>
        {routes.map((route) => (
          <Item
            key={route.path}
            as={Link}
            to={route.path}
            isActive={!!getURL().match(`${route.path}$`)}
          >
            {route.name}
          </Item>
        ))}
      </List>
    </Container>
  )
}
