import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Apresentacao from '../../Containers/Apresentacao'
import ListaDeProduto from '../../Containers/ListaDeProduto'

const Restaurante = () => (
  <>
    <Header variant="default" />
    <Apresentacao />
    <div className="container">
      <ListaDeProduto />
    </div>
    <Footer />
  </>
)

export default Restaurante
