import './Cart.css'
import { Link } from 'react-router-dom'
import Cart_icon from '../../../public/cart_icon.svg'
import Ruble_icon from '../../../public/ruble_icon.svg'

export default function Cart() {
	return (
		<button className='cart'>
			<Link to='/cart' className='cart__link'>
				<div className='cart__value'>
					<img src={Cart_icon} />
					<p>0</p>
				</div>
				<div className='cart__cost'>
					<p>754</p>
					<img src={Ruble_icon} />
				</div>
			</Link>
		</button>
	)
}
