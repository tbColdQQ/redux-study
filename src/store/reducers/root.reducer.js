import { combineReducers } from 'redux'
import ProductReducer from './product.reducer'
import CartReducer from './cart.reducer'

export default combineReducers({
  products: ProductReducer,
  carts: CartReducer
})