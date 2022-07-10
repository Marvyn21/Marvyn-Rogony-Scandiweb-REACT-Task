// A "slice" is a collection of Redux reducer logic and actions for a single feature in your app
import { createSlice } from '@reduxjs/toolkit'

const initialState = { products: [] }

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = {
        attributes: action.payload.attributes,
        item: action.payload.item, amount: action.payload.amount,
        id: action.payload.item.id + Object.entries(action.payload.attributes)
      }
      // check if the item is already in the cart
      const index = state.products.findIndex(e => e.id === product.id)
      if (index !== -1) {
        state.products[index].amount += 1
      } else {
        state.products.push(product)
      }
    },
    incrementAmount: (state, action) => {
      const id = action.payload
      const index = state.products.findIndex(e => e.id === id)
      state.products[index].amount += 1
    },
    decreaseAmount: (state, action) => {
      const id = action.payload
      const index = state.products.findIndex(e => e.id === id)
      state.products[index].amount -= 1
      if (state.products[index].amount === 0) {
        // if the amount is 0, proceed to delete de product
        const newItems = [...state.products]
        newItems.splice(index, 1)
        state.products = newItems
      }
    },
  }
})

export const { addItem, totalPrice, incrementAmount, decreaseAmount } = cartSlice.actions


export default cartSlice.reducer