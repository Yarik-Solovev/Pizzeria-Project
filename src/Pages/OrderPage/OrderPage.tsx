import './OrderPage.css'
import RecipientData from '../../Components/RecipientData/RecipientData'
import CheckoutHeader from '../../Components/CheckoutHeader/CheckoutHeader'
import OrderPayment from './../../Components/OrderPayment/OrderPayment'
import OrderPageHeader from './../../Components/OrderPageHeader/OrderPageHeader'
import OrderInfo from '../../Components/OrderInfo/OrderInfo'

export default function OrderPage() {
	return (
		<>
			<OrderPageHeader />
			<div className='order__main'>
				<div className='order__checkout'>
					<CheckoutHeader />
					<RecipientData />
					<OrderPayment />
				</div>
				<OrderInfo />
			</div>
		</>
	)
}
