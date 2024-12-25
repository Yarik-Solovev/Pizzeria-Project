import { useRef, useEffect, memo } from 'react'
import { createPortal } from 'react-dom'
import { useAppSelector } from '../../Hooks/UseAppSelector'
import { TModalProps } from '../../Types/TModalProps'
import cross_icon from '../../../public/cross_icon.svg'
import './Modal.css'

const Modal = ({ pizza, onClose }: TModalProps) => {
	const dialogRef = useRef<HTMLDialogElement>(null)
	const { open } = useAppSelector(state => state.modal)

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
						<img src={cross_icon} loading='lazy' onClick={() => onClose()} />
					</div>
					<div className='modal__info'>
						<p>{`${pizza.sizes[1]} см, ${pizza.dough[0]} тесто, ${pizza.weight[1]} г`}</p>
					</div>
					<div className='modal__description'>
						<p>{pizza.subtitle}</p>
					</div>
					<div className='modal__sizes'>
						<button>{`${pizza.sizes[0]} см`}</button>
						<button className='active'>{`${pizza.sizes[1]} см`}</button>
						<button>{`${pizza.sizes[2]} см`}</button>
					</div>
					<div className='modal__dough'>
						<button>{pizza.dough[0]}</button>
						<button>{pizza.dough[1]}</button>
					</div>
					<div className='modal__addToCartButton'>
						<button>{`В корзину за ${pizza.price[1]}₽`}</button>
					</div>
				</div>
			</div>
		</dialog>,
		document.body
	)
}

export default memo(Modal)
