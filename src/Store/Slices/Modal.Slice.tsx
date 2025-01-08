import { TModal } from '../../Types/TModal'
import { createSlice } from '@reduxjs/toolkit'

const initialState: TModal = {
	open: false,
}

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		setModalOpen(state) {
			state.open = true
		},
		setModalClose(state) {
			state.open = false
		},
	},
})

export default modalSlice.reducer
export const modalActions = modalSlice.actions
