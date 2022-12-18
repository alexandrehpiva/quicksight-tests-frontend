import { Container, SvgCircle } from './styles'
import { FCC } from '../../typings/global'

type CircleLoadingProps = {
  size?: number
}
const CircleLoading: FCC<CircleLoadingProps> = ({ size = 20 }) => {
  return (
    <Container size={size}>
      <SvgCircle viewBox="22 22 44 44">
        <circle cx="44" cy="44" r={size} fill="none"></circle>
      </SvgCircle>
    </Container>
  )
}

export default CircleLoading
