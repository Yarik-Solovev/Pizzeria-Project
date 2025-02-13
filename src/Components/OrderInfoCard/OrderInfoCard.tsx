import { useAppSelector } from '../../Hooks/UseAppSelector'
import './OrderInfoCard.css'

export default function OrderInfoCard() {
	const cartItems = useAppSelector(state => state.Cart.items)

	return cartItems.map(item => (
		<div className='orderCard' key={item.id}>
			<img src={item.image} />
			<div className='orderCardTitle'>
				<h3>{item.title}</h3>
				<p>{item.subtitle}</p>
			</div>
		</div>
	))
}
