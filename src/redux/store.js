import { configureStore } from '@reduxjs/toolkit'
import currencyReducer from './currencySlice'
import cartReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    // this says that we want to have a state.currency section of our Redux state object, 
    // and that we want the counterReducer to be in charge of updating it
    currency: currencyReducer,
    cart: cartReducer
  }
})