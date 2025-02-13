import './PizzaCard.css'
import { TPizzaCardProps } from '../../Types/TPizzaCardProps'
import { memo } from 'react'

const PizzaCard = memo(function ({ pizza, onSelected }: TPizzaCardProps) {
	return (
		<div className='main__pizza'>
			<div className='pizza__img'>
				<img
					src={pizza.image}
					alt={pizza.title}
					loading='lazy'
					width='200'
					height='200'
					draggable='false'
				/>
			</div>
			<div className='pizza__about'>
				<div className='pizza__info'>
					<h1>{pizza.title}</h1>
					<p>{pizza.subtitle}</p>
				</div>
				<div className='pizza__purchase'>
					<div className='pizza__price'>
						<h1>от {pizza.price[0]}</h1>
					</div>
					<button
						onClick={() => onSelected(pizza)}
						type='button'
						aria-label={`Select ${pizza.title}`}
					>
						Выбрать
					</button>
				</div>
			</div>
		</div>
	)
})
export default PizzaCard
