import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './Slices/User.Slice'

const rootReducer = combineReducers({
	user: userReducer,
})

export const store = configureStore({
	reducer: rootReducer,
})

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch
