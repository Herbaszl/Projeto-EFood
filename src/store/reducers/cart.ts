import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProdutoType } from '../../types/types'

type CartState = {
  items: ProdutoType[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProdutoType>) => {
      const produto = state.items.find(
        (item: ProdutoType) => item.id === action.payload.id
      )

      if (!produto) {
        state.items.push(action.payload)
      } else {
        alert('Este Produto ja está no carrinho!')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, close, open, remove } = cartSlice.actions
export default cartSlice.reducer
