import './OrderPage.css'
import RecipientData from '../../Components/RecipientData/RecipientData'
import CheckoutHeader from '../../Components/CheckoutHeader/CheckoutHeader'

export default function OrderPage() {
	return (
		<div className='order__main'>
			<div className='order__checkout'>
				<CheckoutHeader />
				<RecipientData />
			</div>
			<div className='order__info'></div>
		</div>
	)
}
