import { TUser } from '@/Types/TUser'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: TUser = {
	count: 0,
}

export const UserSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		increment(state, action: PayloadAction<number>) {
			if (state.count >= 0) {
				state.count += action.payload
			}
		},
		decrement(state, action: PayloadAction<number>) {
			if (state.count > 0) {
				state.count -= action.payload
			}
		},
	},
})

export default UserSlice.reducer
export const { actions } = UserSlice
