import { useForm } from 'react-hook-form'
import './SearchField.css'
import { TForm } from '@/Types/TForm'
import { useAction } from '../../Hooks/UseAction'
import { useEffect } from 'react'

export default function SearchField() {
	const { setPizzaName } = useAction()
	const { register, watch } = useForm<TForm>({
		mode: 'onChange',
	})
	const pizza = watch('pizza')
	useEffect(() => {
		if (pizza !== undefined) {
			setPizzaName(pizza)
		}
	}, [pizza])
	return (
		<form>
			<input
				type='text'
				placeholder='Поиск пиццы...'
				className='search__field'
				{...register('pizza', {})}
			/>
		</form>
	)
}
