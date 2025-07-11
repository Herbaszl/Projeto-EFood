import React, { useState } from 'react'
import * as S from './styles'
import closeIcon from '../../assets/images/close.svg'
import { useDispatch } from 'react-redux'
import { add } from '../../store/reducers/cart'

type Props = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco?: number
  porcao?: string
}

const Produto = ({ id, nome, descricao, foto, preco, porcao }: Props) => {
  const produtoAdd = {
    foto,
    id,
    nome,
    descricao,
    preco: preco || 0,
    porcao: porcao || ''
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(produtoAdd))
  }

  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  const abrirModal = () => {
    setModalEstaAberto(true)
  }

  const fecharModal = () => {
    setModalEstaAberto(false)
  }

  return (
    <>
      <S.CardProduto>
        <S.Conteudo>
          <S.ImagemProduto src={foto} />
          <S.Titulo>{nome}</S.Titulo>
          <S.Descricao>{descricao}</S.Descricao>
          <S.BtnCarrinho onClick={abrirModal}>
            Adicionar ao Carrinho
          </S.BtnCarrinho>
        </S.Conteudo>
      </S.CardProduto>

      {modalEstaAberto && (
        <S.Modal>
          <S.Overlay onClick={fecharModal} />

          <S.ModalContent>
            <S.ModalImage src={foto} alt={nome} />
            <S.ModalTextContent>
              <S.ModalHeader>
                <h4>{nome}</h4>

                <S.BotaoFechar
                  src={closeIcon}
                  alt="Fechar"
                  onClick={fecharModal}
                />
              </S.ModalHeader>
              <S.ModalDescription>{descricao}</S.ModalDescription>
              {porcao && <p>{porcao}</p>}
              <S.ModalAddToCartButton
                onClick={() => {
                  addToCart()
                  fecharModal()
                }}
              >
                Adicionar ao carrinho - R${' '}
                {preco ? preco.toFixed(2).replace('.', ',') : '0,00'}
              </S.ModalAddToCartButton>
            </S.ModalTextContent>
          </S.ModalContent>
        </S.Modal>
      )}
    </>
  )
}

export default Produto
