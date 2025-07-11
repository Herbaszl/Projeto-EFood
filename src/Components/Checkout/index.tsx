// src/Components/Checkout/index.tsx
import React from 'react'
import * as S from './styles'
import { BtnCarrinho } from '../Produto/styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { setDeliveryData } from '../../store/checkout/checkout'

type Props = {
  onBackToCart: () => void
  onContinueToPayment?: () => void
  onCloseCart?: () => void
}

const Checkout = ({ onBackToCart, onContinueToPayment }: Props) => {
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter no pelo menos 5 caracteres')
        .required('Campo obrigatório: Quem irá receber'),
      address: Yup.string()
        .min(5, 'O endereço precisa ter no pelo menos 5 caracteres')
        .required('Campo obrigatório: Endereço'),
      city: Yup.string()
        .min(3, 'A cidade precisa ter pelo menos 3 caracteres')
        .required('Campo obrigatório: Cidade'),
      cep: Yup.string()
        .min(9, 'O CEP precisa ter 9 dígitos (ex: 00000-000)')
        .max(9, 'O CEP precisa ter 9 dígitos (ex: 00000-000)')
        .required('Campo obrigatório: CEP'),
      number: Yup.string()
        .min(1, 'O número precisa ter pelo menos 1 dígito')
        .required('Campo obrigatório: Número'),
      complement: Yup.string().min(
        2,
        'O complemento precisa ter pelo menos 2 caracteres'
      )
    }),
    onSubmit: (values) => {
      dispatch(
        setDeliveryData({
          receiver: values.receiver,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: parseInt(values.number),
            complement: values.complement || undefined
          }
        })
      )
      if (onContinueToPayment) {
        onContinueToPayment()
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
        <S.FormTitulo>Entrega</S.FormTitulo>
        <S.InputDiv>
          <label htmlFor="receiver">Quem irá receber</label>
          <S.FormInput
            type="text"
            id="receiver"
            name="receiver"
            value={form.values.receiver}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={getErrorMessage('receiver') ? 'error' : ''}
          />
          {getErrorMessage('receiver') && (
            <small>{getErrorMessage('receiver')}</small>
          )}
        </S.InputDiv>
        <S.InputDiv>
          <label htmlFor="address">Endereço</label>
          <S.FormInput
            type="text"
            id="address"
            name="address"
            value={form.values.address}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={getErrorMessage('address') ? 'error' : ''}
          />
          {getErrorMessage('address') && (
            <small>{getErrorMessage('address')}</small>
          )}
        </S.InputDiv>
        <S.InputDiv>
          <label htmlFor="city">Cidade</label>
          <S.FormInput
            type="text"
            id="city"
            name="city"
            value={form.values.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={getErrorMessage('city') ? 'error' : ''}
          />
          {getErrorMessage('city') && <small>{getErrorMessage('city')}</small>}
        </S.InputDiv>
        <S.Row>
          <S.InputDiv metade>
            <label htmlFor="cep">CEP</label>
            <S.FormInput
              type="text"
              id="cep"
              name="cep"
              value={form.values.cep}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={getErrorMessage('cep') ? 'error' : ''}
            />
            {getErrorMessage('cep') && <small>{getErrorMessage('cep')}</small>}
          </S.InputDiv>
          <S.InputDiv metade>
            <label htmlFor="number">Número</label>
            <S.FormInput
              type="text"
              id="number"
              name="number"
              value={form.values.number}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={getErrorMessage('number') ? 'error' : ''}
            />
            {getErrorMessage('number') && (
              <small>{getErrorMessage('number')}</small>
            )}
          </S.InputDiv>
        </S.Row>
        <S.InputDiv>
          <label htmlFor="complement">Complemento (opcional)</label>
          <S.FormInput
            type="text"
            id="complement"
            name="complement"
            value={form.values.complement}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={getErrorMessage('complement') ? 'error' : ''}
          />
          {getErrorMessage('complement') && (
            <small>{getErrorMessage('complement')}</small>
          )}
        </S.InputDiv>
        <S.DeliveryButtonsContainer>
          <BtnCarrinho type="submit">Continuar com o pagamento</BtnCarrinho>
          <S.BackButton type="button" onClick={onBackToCart}>
            Voltar para o carrinho
          </S.BackButton>
        </S.DeliveryButtonsContainer>
      </S.FormularioContainer>
    </form>
  )
}

export default Checkout
