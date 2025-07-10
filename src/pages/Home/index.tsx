import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import ListaDeRestaurantes from '../../Containers/ListaDeRestaurante'
import Restaurantes from '../../models/restaurantes'
import sushi from '../../assets/images/sushi.png'
import macarrao from '../../assets/images/macarrao.png'

const Rest: Restaurantes[] = [
  {
    id: 1,
    name: 'Hioki Sushi',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery! ',
    avaliacao: '4,9',
    infos: ['Destaque da Semana', 'Japonesa'],
    image: sushi
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    avaliacao: '4,6',
    infos: ['Italiana'],
    image: macarrao
  },
  {
    id: 3,
    name: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    avaliacao: '4,6',
    infos: ['Italiana'],
    image: macarrao
  },
  {
    id: 4,
    name: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    avaliacao: '4,6',
    infos: ['Italiana'],
    image: macarrao
  },
  {
    id: 5,
    name: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    avaliacao: '4,6',
    infos: ['Italiana'],
    image: macarrao
  },
  {
    id: 6,
    name: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    avaliacao: '4,6',
    infos: ['Italiana'],
    image: macarrao
  }
]

const Home = () => (
  <>
    <Header variant="home" />
    <ListaDeRestaurantes restaurant={Rest} />
    <Footer />
  </>
)
export default Home
