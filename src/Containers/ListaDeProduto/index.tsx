import Produto from '../../Components/Produto'
import { ProdutoType } from '../../types/types'
import * as S from './styles'

type Props = {
  product: ProdutoType[]
}

const ListaDeProduto = ({ product }: Props) => {
  return (
    <>
      <S.Produtos>
        {product.map((listaProdutos) => (
          <Produto
            key={listaProdutos.id}
            id={listaProdutos.id}
            nome={listaProdutos.nome}
            foto={listaProdutos.foto}
            descricao={listaProdutos.descricao}
            preco={listaProdutos.preco}
            porcao={listaProdutos.porcao}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ListaDeProduto
