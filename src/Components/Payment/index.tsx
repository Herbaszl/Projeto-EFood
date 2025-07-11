import * as S from '../Checkout/styles'
import { BtnCarrinho } from '../Produto/styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import { setPaymentData } from '../../store/checkout/checkout'

type Props = {
  onBackCheckout: () => void
  onFinishPayment?: (orderId: string) => void // Corrigido: onFinishPayment agora espera um argumento 'orderId' do tipo string
  onCloseCart?: () => void
  deliveryData: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
}

const Payment = ({
  onBackCheckout,
  onFinishPayment,
  onCloseCart,
  deliveryData
}: Props) => {
  const dispatch = useDispatch()
  const { items: cartItems } = useSelector((state: RootReducer) => state.cart)

  const [purchase, { isLoading: isPurchasing, data: purchaseData }] =
    usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      name: '',
      cardNumber: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'O campo deve ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(16, 'O número do cartão deve ter 16 dígitos')
        .max(16, 'O número do cartão deve ter 16 dígitos')
        .required('O campo é obrigatório'),
      cvv: Yup.string()
        .min(3, 'O CVV deve ter 3 ou 4 dígitos')
        .max(4, 'O CVV deve ter 3 ou 4 dígitos')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(1, 'O mês deve ter 1 ou 2 dígitos')
        .max(2, 'O mês deve ter 1 ou 2 dígitos')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(4, 'O ano deve ter 4 dígitos')
        .max(4, 'O ano deve ter 4 dígitos')
        .required('O campo é obrigatório')
    }),
    onSubmit: async (values) => {
      dispatch(setPaymentData(values))

      if (!deliveryData) {
        alert(
          'Erro: Dados de entrega não encontrados. Por favor, volte e preencha a entrega.'
        )
        onBackCheckout()
        return
      }

      const purchasePayload = {
        products: cartItems.map((item) => ({
          id: item.id,
          price: item.preco || 0
        })),
        delivery: {
          receiver: deliveryData.receiver,
          address: {
            description: deliveryData.address.description,
            city: deliveryData.address.city,
            zipCode: deliveryData.address.zipCode,
            number: deliveryData.address.number,
            complement: deliveryData.address.complement
          }
        },
        payment: {
          card: {
            name: values.name,
            number: values.cardNumber,
            code: parseInt(values.cvv),
            expires: {
              month: parseInt(values.expiresMonth),
              year: parseInt(values.expiresYear)
            }
          }
        }
      }

      try {
        const response = await purchase(purchasePayload).unwrap()
        // console.log('a api esta respondendo?:', response)
        alert('Compra realizada com sucesso!')
        if (onFinishPayment && response && response.orderId) {
          onFinishPayment(response.orderId.toString())
        } else if (onCloseCart) {
          onCloseCart()
        }
      } catch (err) {
        console.error('Falha ao realizar a compra:', err)
        alert(
          'Erro ao finalizar a compra. Por favor, verifique os dados e tente novamente.'
        )
      }
    }
  })

  const getErrorMessage = (fieldName: keyof typeof form.values) => {
    if (form.touched[fieldName] && form.errors[fieldName]) {
      return form.errors[fieldName]
    }
    return ''
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <S.FormularioContainer>
        <S.FormTitulo>Pagamento</S.FormTitulo>
        <S.InputDiv>
          <label htmlFor="name">Nome no cartão</label>
          <S.FormInput
            type="text"
            id="name"
            name="name"
            value={form.values.name}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={getErrorMessage('name') ? 'error' : ''}
          />
          {getErrorMessage('name') && <small>{getErrorMessage('name')}</small>}
        </S.InputDiv>
        <S.Row>
          <S.InputDiv metade>
            <label htmlFor="cardNumber">Número do Cartão</label>
            <S.FormInput
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={form.values.cardNumber}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={getErrorMessage('cardNumber') ? 'error' : ''}
            />
            <small>{getErrorMessage('cardNumber')}</small>
          </S.InputDiv>
          <S.InputDiv metade>
            <label htmlFor="cvv">CVV</label>
            <S.FormInput
              type="text"
              id="cvv"
              name="cvv"
              value={form.values.cvv}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={getErrorMessage('cvv') ? 'error' : ''}
            />
            <small>{getErrorMessage('cvv')}</small>
          </S.InputDiv>
        </S.Row>
        <S.Row>
          <S.InputDiv metade>
            <label htmlFor="expiresMonth">Mês de vencimento</label>
            <S.FormInput
              type="text"
              id="expiresMonth"
              name="expiresMonth"
              value={form.values.expiresMonth}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={getErrorMessage('expiresMonth') ? 'error' : ''}
            />
            <small>{getErrorMessage('expiresMonth')}</small>
          </S.InputDiv>
          <S.InputDiv metade>
            <label htmlFor="expiresYear">Ano de vencimento</label>
            <S.FormInput
              type="text"
              id="expiresYear"
              name="expiresYear"
              value={form.values.expiresYear}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={getErrorMessage('expiresYear') ? 'error' : ''}
            />
            <small>{getErrorMessage('expiresYear')}</small>
          </S.InputDiv>
        </S.Row>
        <S.DeliveryButtonsContainer>
          <BtnCarrinho type="submit" disabled={isPurchasing}>
            {isPurchasing ? 'Finalizando...' : 'Finalizar o pagamento'}
          </BtnCarrinho>
          <S.BackButton type="button" onClick={onBackCheckout}>
            Endereço errado? Edite aqui
          </S.BackButton>
        </S.DeliveryButtonsContainer>
      </S.FormularioContainer>
    </form>
  )
}

export default Payment
