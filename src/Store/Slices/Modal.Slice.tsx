import { TModal } from '../../Types/TModal'
import { createSlice } from '@reduxjs/toolkit'

const initialState: TModal = {
	open: false,
}

export const ModalSlice = createSlice({
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

export default ModalSlice.reducer
export const { actions } = ModalSlice
