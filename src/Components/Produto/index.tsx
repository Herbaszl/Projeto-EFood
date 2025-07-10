import React, { useState } from 'react'
import * as S from './styles'
import closeIcon from '../../assets/images/close.svg'
type Props = {
  id: number
  name: string
  descricao: string
  image: string
  preco?: number
  porcao?: string
}

const Produto = ({ id, name, descricao, image, preco, porcao }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  const abrirModal = () => {
    console.log('Abrindo modal...')
    setModalEstaAberto(true)
  }

  const fecharModal = () => {
    setModalEstaAberto(false)
  }

  return (
    <>
      <S.CardProduto>
        <S.Conteudo>
          <S.ImagemProduto src={image} />
          <S.Titulo>{name}</S.Titulo>
          <S.Descricao>{descricao}</S.Descricao>
          {/* BOTÃO QUE ABRE O MODAL */}
          <S.BtnCarrinho onClick={abrirModal}>
            Adicionar ao Carrinho
          </S.BtnCarrinho>
        </S.Conteudo>
      </S.CardProduto>

      {modalEstaAberto && (
        <S.Modal>
          <S.Overlay onClick={fecharModal} />

          <S.ModalContent>
            <S.ModalImage src={image} alt={name} />
            <S.ModalTextContent>
              <S.ModalHeader>
                <h4>{name}</h4>

                <S.CloseButton
                  src={closeIcon}
                  alt="Fechar"
                  onClick={fecharModal}
                />
              </S.ModalHeader>
              <S.ModalDescription>{descricao}</S.ModalDescription>
              {porcao && <p>{porcao}</p>}
              <S.ModalAddToCartButton>
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
