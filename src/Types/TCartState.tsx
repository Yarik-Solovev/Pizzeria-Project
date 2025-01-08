import { CartItem } from './TCartItem'

export type CartState = {
	items: CartItem[]
	totalAmount: number
	totalQuantity: number
}
