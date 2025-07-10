import * as S from './styles'
import Pizza from '../../assets/images/pizza.png'

const Produto = () => (
  <S.CardProduto>
    <S.Conteudo>
      <S.ImagemProduto src={Pizza} />

      <S.Titulo>Pizza Marguerita</S.Titulo>
      <S.Descricao>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </S.Descricao>
      <S.BtnCarrinho>Adicionar ao Carrinho</S.BtnCarrinho>
    </S.Conteudo>
  </S.CardProduto>
)

export default Produto
