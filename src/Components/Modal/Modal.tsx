import { useRef, useEffect, memo, useState } from 'react'
import { createPortal } from 'react-dom'
import { useAppSelector } from '../../Hooks/UseAppSelector'
import { TModalProps } from '../../Types/TModalProps'
import cross_icon from '../../../public/cross_icon.svg'
import './Modal.css'
import { useAction } from '../../Hooks/UseAction'

const Modal = ({ pizza, onClose }: TModalProps) => {
	const totalQuantity = useAppSelector(state => state.Cart.totalQuantity)
	const [amount, setAmount] = useState(0)
	const { addItem, removeItem } = useAction()
	const [sizes, setSizes] = useState(pizza.sizes[1])
	const [dough, setDough] = useState(pizza.dough[0])
	const [weight, setWeight] = useState(pizza.weight[1])
	const [price, setPrice] = useState(pizza.price[1])
	const dialogRef = useRef<HTMLDialogElement>(null)
	const { open } = useAppSelector(state => state.modal)
	const item = {
		id: pizza.id,
		title: pizza.title,
		image: pizza.image,
		subtitle: pizza.subtitle,
		price: price,
		sizes: sizes,
		dough: dough,
		weight: weight,
	}

	useEffect(() => {
		const dialog = dialogRef.current
		if (!dialog) return

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose()
			}
		}

		const handleClickOutside = (event: MouseEvent) => {
			if (event.target === dialog) {
				onClose()
			}
		}

		if (open) {
			dialog.showModal()
			document.addEventListener('keydown', handleEscape)
			dialog.addEventListener('click', handleClickOutside)
		} else {
			dialog.close()
		}

		return () => {
			document.removeEventListener('keydown', handleEscape)
			dialog?.removeEventListener('click', handleClickOutside)
		}
	}, [open, onClose])

	if (!pizza) return null

	return createPortal(
		<dialog
			ref={dialogRef}
			className='modal'
			aria-labelledby='modal-title'
			aria-modal='true'
		>
			<div className='modal__content'>
				<div className='modal__image'>
					<img src={pizza.image} alt={pizza.title} loading='lazy' />
				</div>
				<div className='modal__main'>
					<div className='modal__title'>
						<h1>{pizza.title}</h1>
						<img
							src={cross_icon}
							loading='lazy'
							onClick={() => onClose()}
							draggable='false'
						/>
					</div>
					<div className='modal__info'>
						<p>{`${sizes} см, ${dough} тесто, ${weight} г`}</p>
					</div>
					<div className='modal__description'>
						<p>{pizza.subtitle}</p>
					</div>
					<div className='modal__sizes-switcher'>
						<button
							className={sizes === 25 ? 'active' : ''}
							onClick={() => {
								setSizes(pizza.sizes[0])
								setWeight(pizza.weight[0])
								setPrice(pizza.price[0])
							}}
						>{`${pizza.sizes[0]} см`}</button>
						<button
							className={sizes === 30 ? 'active' : ''}
							onClick={() => {
								setSizes(pizza.sizes[1])
								setWeight(pizza.weight[1])
								setPrice(pizza.price[1])
							}}
						>{`${pizza.sizes[1]} см`}</button>
						<button
							className={sizes === 35 ? 'active' : ''}
							onClick={() => {
								setSizes(pizza.sizes[2])
								setWeight(pizza.weight[2])
								setPrice(pizza.price[2])
							}}
						>{`${pizza.sizes[2]} см`}</button>
					</div>
					<div className='modal__dough'>
						<button
							className={dough === 'традиционное' ? 'active' : ''}
							onClick={() => setDough(pizza.dough[0])}
						>
							{pizza.dough[0]}
						</button>
						<button
							className={dough === 'тонкое' ? 'active' : ''}
							onClick={() => setDough(pizza.dough[1])}
						>
							{pizza.dough[1]}
						</button>
					</div>

					{amount > 0 ? (
						<div className='addToCartButton'>
							<button
								onClick={() => {
									if (amount > 0) {
										removeItem(item.id)
										setAmount(prev => prev - 1)
									}
								}}
							>
								-
							</button>
							<p>{amount}</p>
							<button
								onClick={() => {
									if (totalQuantity < 50) addItem(item)
									setAmount(prev => (amount < 50 ? prev + 1 : prev))
								}}
							>
								+
							</button>
						</div>
					) : (
						<div className='modal__addToCartButton'>
							<button
								onClick={() => {
									if (totalQuantity < 50) {
										addItem(item)
										setAmount(prev => prev + 1)
									}
								}}
							>{`В корзину за ${price}₽`}</button>
						</div>
					)}
				</div>
			</div>
		</dialog>,
		document.body
	)
}

export default memo(Modal)
