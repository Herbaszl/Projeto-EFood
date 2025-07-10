import Restaurante from '../../Components/Restaurante'
import { Container, List } from './styles'
import macarrao from '../../assets/images/macarrao.png'
import sushi from '../../assets/images/sushi.png'
import Restaurants from '../../models/restaurantes'

type Props = {
  restaurant: Restaurants[]
}

const ListaDeRestaurantes = ({ restaurant }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurant.map((restaurant) => (
          <Restaurante
            key={restaurant.id}
            avaliacao={restaurant.avaliacao}
            name={restaurant.name}
            infos={restaurant.infos}
            image={restaurant.image}
            descricao={restaurant.descricao}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ListaDeRestaurantes
