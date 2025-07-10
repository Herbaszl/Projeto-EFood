import Tag from '../../Components/Tag'
import * as S from './styles'

type Props = {
  capa: string
  titulo: string
  tipo: string
}

const Apresentacao = ({ capa, tipo, titulo }: Props) => (
  <S.Container style={{ backgroundImage: `url(${capa})` }}>
    <S.Conteudo>
      <S.Categoria>{tipo}</S.Categoria>
      <S.Titulo>{titulo}</S.Titulo>
    </S.Conteudo>
  </S.Container>
)

export default Apresentacao
