import Restaurante from '../../Components/Restaurante'
import { Container, List } from './styles'
import macarrao from '../../assets/images/macarrao.png'
import sushi from '../../assets/images/sushi.png'
import { RestauranteType } from '../../types/types'
type Props = {
  listaRestaurantes: RestauranteType[]
}

const ListaDeRestaurantes = ({ listaRestaurantes }: Props) => (
  <Container>
    <div className="container">
      <List>
        {listaRestaurantes.map((listaRestaurantes) => (
          <Restaurante
            key={listaRestaurantes.id}
            id={listaRestaurantes.id}
            avaliacao={listaRestaurantes.avaliacao}
            titulo={listaRestaurantes.titulo}
            infos={listaRestaurantes.destacado ? ['Destaque'] : []}
            capa={listaRestaurantes.capa}
            tipo={listaRestaurantes.tipo}
            destacado={listaRestaurantes.destacado}
            descricao={listaRestaurantes.descricao}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ListaDeRestaurantes
