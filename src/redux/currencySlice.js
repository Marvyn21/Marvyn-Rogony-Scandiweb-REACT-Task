// A "slice" is a collection of Redux reducer logic and actions for a single feature in your app
import { createSlice } from '@reduxjs/toolkit'

const initialState = { label: 'USD', symbol: '$' }

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.label = action.payload.label
      state.symbol = action.payload.symbol
    }
  }
})

export const { setCurrency } = currencySlice.actions
export default currencySlice.reducer