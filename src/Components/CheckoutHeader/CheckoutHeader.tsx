import './CheckoutHeader.css'
import arrow_icon from '../../../public/arrow_icon.avif'
import { Link } from 'react-router-dom'

export default function CheckoutHeader() {
	return (
		<div className='checkoutHeader'>
			<div className='back__button'>
				<Link to='/'>
					<img src={arrow_icon} />
					<p>Назад</p>
				</Link>
			</div>
			<div className='checkout__title'>
				<h1>Оформление заказа</h1>
			</div>
		</div>
	)
}
