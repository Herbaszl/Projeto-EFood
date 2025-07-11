import { ClockLoader } from 'react-spinners'
import { Container } from './styles'
import { Cores } from '../styles'

const Loader = () => (
  <Container>
    <ClockLoader color={Cores.rosa} />
  </Container>
)

export default Loader
