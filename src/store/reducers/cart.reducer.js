import { handleActions as createReducer } from 'redux-actions'
import { addProductToLocalCart, changeLocalProductNum, deleteProductFromLocalCart, saveCarts} from '../actions/cart.actions'

const initialState = []

const handleAddProductToLocalCart = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  const product = newState.find(product => product.id === action.payload.id)
  if (product) {
    product.count = Number(product.count) + 1
  } else {
    newState.push(action.payload)
  }
  return newState
}

const handleSaveCarts = (state, action) => action.payload

const handleDeleteProductFromLocalCart = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  newState.splice(action.payload, 1)
  return newState
}

const handleChangeLocalProductNum = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  const product = newState.find(product => product.id === action.payload.id)
  product.count = action.payload.count
  return newState
}

export default createReducer({
  [addProductToLocalCart]: handleAddProductToLocalCart,
  [saveCarts]: handleSaveCarts,
  [deleteProductFromLocalCart]: handleDeleteProductFromLocalCart,
  [changeLocalProductNum]: handleChangeLocalProductNum
}, initialState)