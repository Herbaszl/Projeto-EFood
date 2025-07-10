import Tag from '../Tag'
import sushi from '../../assets/images/sushi.png'
import estrela from '../../assets/images/estrela.svg'
import * as S from './styles'

type Props = {
  name: string
  descricao: string
  image: string
  infos: string[]
  avaliacao: string
}

const Restaurante = ({ avaliacao, name, descricao, image, infos }: Props) => (
  <S.Card>
    <img src={image} alt={name} />
    <S.Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </S.Infos>

    <S.Conteudo>
      <S.Header>
        <S.Titulo>{name}</S.Titulo>
        <S.Avaliacao>
          <span>{avaliacao}</span>
          <img src={estrela} alt="Estrela de avaliação" />
        </S.Avaliacao>
      </S.Header>

      <S.Descricao>{descricao}</S.Descricao>
      <S.BotaoSaibaMais to="/restaurante/LaDolceVitta">
        Saiba mais
      </S.BotaoSaibaMais>
    </S.Conteudo>
  </S.Card>
)

export default Restaurante
