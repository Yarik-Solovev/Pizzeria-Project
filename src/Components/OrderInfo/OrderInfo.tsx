import './OrderInfo.css'
import OrderInfoCard from '../OrderInfoCard/OrderInfoCard'

export default function OrderInfo() {
	return (
		<div className='order__info__main'>
			<h1>Данные заказа</h1>
			<div className='order__info'>
				<OrderInfoCard />
			</div>
		</div>
	)
}
