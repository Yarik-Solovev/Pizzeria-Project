import { combineReducers, configureStore } from '@reduxjs/toolkit'
import modalReducer from './Slices/Modal.Slice'
import searchFieldReducer from './Slices/SearchField.Slice'
import categoryReducer from './Slices/Category.Slice'
import cartReducer from './Slices/Cart.Slice'

const rootReducer = combineReducers({
	modal: modalReducer,
	SearchField: searchFieldReducer,
	Category: categoryReducer,
	Cart: cartReducer,
})

export const store = configureStore({
	reducer: rootReducer,
})

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch
