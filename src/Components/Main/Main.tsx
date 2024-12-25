import { useQuery } from '@tanstack/react-query'
import './Main.css'
import { TPizza } from '../../Types/TPizza'
import axios from 'axios'
import PizzaCard from '../PizzaCard/PizzaCard'
import { useAppSelector } from '../../Hooks/UseAppSelector'
import Modal from '../Modal/Modal'
import { useState } from 'react'
import { useAction } from './../../Hooks/UseAction'

async function fetchPizza(): Promise<TPizza[]> {
	const { data } = await axios.get(
		'https://6751b3dbd1983b9597b3eeb7.mockapi.io/pizza/info'
	)
	return data
}

export default function Main() {
	const [selectedPizza, setSelectedPizza] = useState<TPizza | null>(null)
	const { data, isLoading } = useQuery({
		queryKey: ['pizza'],
		queryFn: () => fetchPizza(),
	})
	const { open } = useAppSelector(state => state.modal)
	const { setModalOpen, setModalClose } = useAction()

	if (isLoading) {
		return (
			<div>
				<p>Loading...</p>
			</div>
		)
	}

	const openModal = (pizza: TPizza) => {
		setSelectedPizza(pizza)
		setModalOpen()
	}

	const closeModal = () => {
		setModalClose()
		setSelectedPizza(null)
	}

	return (
		<div className='main'>
			{data &&
				data.map((pizza: TPizza) => {
					return (
						<PizzaCard key={pizza.id} pizza={pizza} onSelected={openModal} />
					)
				})}
			{open && selectedPizza && (
				<Modal pizza={selectedPizza} onClose={closeModal} />
			)}
		</div>
	)
}
