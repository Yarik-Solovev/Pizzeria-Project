import './Categories.css'

export default function Categories() {
	return (
		<div className='categories'>
			<button className='categories__button active'>Все</button>
			<button className='categories__button'>Хит</button>
			<button className='categories__button'>Мясные</button>
			<button className='categories__button'>Сырные</button>
			<button className='categories__button'>Новинки</button>
		</div>
	)
}
