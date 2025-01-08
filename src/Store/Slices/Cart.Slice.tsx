import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartState } from '../../Types/TCartState'

const initialState: CartState = {
	items: [],
	totalAmount: 0,
	totalQuantity: 0,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(
			state,
			action: PayloadAction<{
				id: number
				title: string
				image: string
				subtitle: string
				dough: string
				sizes: number
				price: number
				weight: number
			}>
		) {
			const newItem = action.payload
			const existingItem = state.items.find(item => item.id === newItem.id)

			if (existingItem) {
				existingItem.quantity++
				existingItem.totalPrice += newItem.price
			} else {
				state.items.push({
					id: newItem.id,
					title: newItem.title,
					image: newItem.image,
					subtitle: newItem.subtitle,
					dough: newItem.dough,
					sizes: newItem.sizes,
					price: newItem.price,
					weight: newItem.weight,
					quantity: 1,
					totalPrice: newItem.price,
				})
			}

			state.totalQuantity++
			state.totalAmount += newItem.price
		},
		removeItem(state, action: PayloadAction<number>) {
			const id = action.payload
			const existingItem = state.items.find(item => item.id === id)

			if (existingItem) {
				if (existingItem.quantity === 1) {
					state.items = state.items.filter(item => item.id !== id)
				} else {
					existingItem.quantity--
					existingItem.totalPrice -= existingItem.price
				}
				state.totalQuantity--
				state.totalAmount -= existingItem.price
			}
		},
		clearCart(state) {
			state.items = []
			state.totalAmount = 0
			state.totalQuantity = 0
		},
	},
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer
