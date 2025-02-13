import './OrderPageHeader.css'
import Pizza_logo from '../../../public/Pizza_logo.png'
import { Link } from 'react-router-dom'

export default function OrderPageHeader() {
	return (
		<header className='orderHeader'>
			<div className='orderHeader__logo'>
				<Link to='/'>
					<img src={Pizza_logo} draggable='false' />
				</Link>
				<Link to='/'>Моя Пицца</Link>
			</div>
		</header>
	)
}
