// src/Components/Restaurante/index.tsx

import Tag from '../Tag'
import estrela from '../../assets/images/estrela.svg'
import * as S from './styles'

type Props = {
  id: number
  titulo: string
  descricao: string
  capa: string
  infos?: string[]
  avaliacao: number
  tipo: string
  destacado: boolean
}

const Restaurante = ({
  avaliacao,
  titulo,
  descricao,
  capa,
  infos,
  id,
  tipo,
  destacado
}: Props) => {
  return (
    <S.Card>
      <img src={capa} alt={titulo} />
      {infos && infos.length > 0 && (
        <S.Infos>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </S.Infos>
      )}

      <S.Conteudo>
        <S.Header>
          <S.Titulo>{titulo}</S.Titulo>
          <S.Avaliacao>
            <span>{avaliacao}</span>
            <img src={estrela} alt="Estrela de avaliação" />
          </S.Avaliacao>
        </S.Header>

        <S.Descricao>{descricao}</S.Descricao>
        <S.BotaoSaibaMais to={`/restaurante/${id}`}>
          Saiba mais
        </S.BotaoSaibaMais>
      </S.Conteudo>
    </S.Card>
  )
}

export default Restaurante
