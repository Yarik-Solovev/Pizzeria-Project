import { TCategory } from '../../Types/TCategory'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: TCategory = {
	category: 'Все',
}

export const categorySlice = createSlice({
	name: 'CategorySlice',
	initialState,
	reducers: {
		setCategory(state, action: PayloadAction<string>) {
			state.category = action.payload
		},
	},
})

export default categorySlice.reducer
export const categoryActions = categorySlice.actions
