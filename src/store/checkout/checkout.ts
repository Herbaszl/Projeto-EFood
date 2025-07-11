import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DeliveryData, PaymentCardData, CheckoutState } from '../../types/types'

const initialState: CheckoutState = {
  delivery: null,
  payment: null
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setDeliveryData: (state, action: PayloadAction<DeliveryData>) => {
      state.delivery = action.payload
    },
    setPaymentData: (state, action: PayloadAction<PaymentCardData>) => {
      state.payment = action.payload
    },
    clearCheckoutData: (state) => {
      state.delivery = null
      state.payment = null
    }
  }
})

export const { setDeliveryData, setPaymentData, clearCheckoutData } =
  checkoutSlice.actions
export default checkoutSlice.reducer
