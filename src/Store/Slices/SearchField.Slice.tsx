import { TForm } from '../../Types/TForm'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: TForm = {
	pizza: '',
}

export const searchFieldSlice = createSlice({
	name: 'SearchFieldSlice',
	initialState,
	reducers: {
		setPizzaName(state, action: PayloadAction<string>) {
			state.pizza = action.payload
		},
	},
})

export default searchFieldSlice.reducer
export const searchFieldActions = searchFieldSlice.actions
