import { combineReducers, configureStore } from '@reduxjs/toolkit'
import ModalReducer from './Slices/Modal.Slice'

const rootReducer = combineReducers({
	modal: ModalReducer,
})

export const store = configureStore({
	reducer: rootReducer,
})

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch
