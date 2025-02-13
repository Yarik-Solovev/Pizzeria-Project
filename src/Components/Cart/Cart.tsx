import './Cart.css'
import { Link } from 'react-router-dom'
import Cart_icon from '../../../public/cart_icon.svg'
import Ruble_icon from '../../../public/ruble_icon.svg'
import { useAppSelector } from '../../Hooks/UseAppSelector'
import Menu_icon from '../../../public/menu__icon.png'

export default function Cart() {
	const totalAmount = useAppSelector(state => state.Cart.totalAmount)
	const totalQuantity = useAppSelector(state => state.Cart.totalQuantity)
	return (
		<div className='cart'>
			<button className='cart__button'>
				<Link to='/checkout' className='cart__link'>
					<div className='cart__value'>
						<img src={Cart_icon} draggable='false' />
						<p>{totalQuantity}</p>
					</div>
					<div className='cart__cost'>
						<p>{totalAmount}</p>
						<img src={Ruble_icon} draggable='false' />
					</div>
				</Link>
			</button>
			<div className='menu__button'>
				<button>
					<img src={Menu_icon} />
				</button>
			</div>
		</div>
	)
}
