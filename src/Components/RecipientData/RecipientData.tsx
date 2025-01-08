import './RecipientData.css'
import { useState, ChangeEvent, KeyboardEvent } from 'react'

export default function RecipientData() {
	const [phone, setPhone] = useState('')

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		let input = event.target.value.replace(/\D/g, '')

		if (input.startsWith('7')) {
			input = input.substring(1)
		}

		let formatted = '+7'
		if (input.length > 0) {
			formatted += ` (${input.substring(0, 3)}`
		}
		if (input.length >= 4) {
			formatted += `) ${input.substring(3, 6)}`
		}
		if (input.length >= 7) {
			formatted += `-${input.substring(6, 8)}`
		}
		if (input.length >= 9) {
			formatted += `-${input.substring(8, 10)}`
		}

		setPhone(formatted)
	}

	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Backspace' && phone.length === 2) {
			setPhone('') // Сбрасываем поле, если всё удалено
		}
	}

	return (
		<div className='recipientData'>
			<h2>Данные получателя</h2>
			<form>
				<div className='recipientInfo'>
					<input type='text' placeholder='Имя' />
					<input
						type='text'
						placeholder='+7'
						value={phone}
						onChange={handleInputChange}
						onKeyDown={handleKeyDown}
					/>
				</div>
				<input type='text' placeholder='Адрес' />
				<textarea placeholder='Комментарий к заказу ' />
			</form>
		</div>
	)
}
