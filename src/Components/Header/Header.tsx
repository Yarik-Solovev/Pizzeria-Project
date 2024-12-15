import './Header.css'
import Pizza_logo from '../../../public/Pizza_logo.png'
import SearchField from './../SearchField/SearchField'
import Cart from './../Cart/Cart'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<header className='header'>
			<div className='header__logo'>
				<Link to='/'>
					<img src={Pizza_logo} />
				</Link>
				<div className='header__titles'>
					<Link to='/'>Моя Пицца</Link>
					<p>
						наша пицца самая <span>лучшая</span>
					</p>
				</div>
			</div>
			<SearchField />
			<Cart />
		</header>
	)
}
