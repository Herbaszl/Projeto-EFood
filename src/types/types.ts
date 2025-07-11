export type ProdutoType = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao?: string
}
export type RestauranteType = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ProdutoType[]
}

export type DeliveryAddress = {
  description: string
  city: string
  zipCode: string
  number: number
  complement?: string
}

export type DeliveryData = {
  receiver: string
  address: DeliveryAddress
}

export type PaymentCardData = {
  name: string
  cardNumber: string
  cvv: string
  expiresMonth: string // Manter esses dois em string depois passar um parseInt
  expiresYear: string
}

export type CheckoutState = {
  delivery: DeliveryData | null
  payment: PaymentCardData | null
}

export type PurchaseProductPayload = {
  id: number
  price: number
}

export type PurchaseAddressPayload = {
  description: string
  city: string
  zipCode: string
  number: number
  complement?: string
}

export type PurchaseDeliveryPayload = {
  receiver: string
  address: PurchaseAddressPayload
}

export type PurchaseCardExpiresPayload = {
  month: number
  year: number
}

export type PurchaseCardPayload = {
  name: string
  number: string
  code: number
  expires: PurchaseCardExpiresPayload
}

export type PurchasePaymentPayload = {
  card: PurchaseCardPayload
}

export type PurchasePayload = {
  products: PurchaseProductPayload[]
  delivery: PurchaseDeliveryPayload
  payment: PurchasePaymentPayload
}
