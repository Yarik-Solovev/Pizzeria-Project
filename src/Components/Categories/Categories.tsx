import './Categories.css'
import { useAppSelector } from '../../Hooks/UseAppSelector'
import { useAction } from '../../Hooks/UseAction'

export default function Categories() {
	const category = useAppSelector(state => state.Category.category)
	const { setCategory } = useAction()
	return (
		<nav className='categories'>
			<button
				className={category === 'Все' ? 'active-category ' : ''}
				onClick={() => setCategory('Все')}
			>
				Все
			</button>
			<button
				className={category === 'Хит' ? 'active-category ' : ''}
				onClick={() => setCategory('Хит')}
			>
				Хит
			</button>
			<button
				className={category === 'Мясная' ? 'active-category ' : ''}
				onClick={() => setCategory('Мясная')}
			>
				Мясные
			</button>
			<button
				className={category === 'Сырная' ? 'active-category ' : ''}
				onClick={() => setCategory('Сырная')}
			>
				Сырные
			</button>
			<button
				className={category === 'Новинка' ? 'active-category ' : ''}
				onClick={() => setCategory('Новинка')}
			>
				Новинки
			</button>
		</nav>
	)
}
