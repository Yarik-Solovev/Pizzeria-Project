import './OrderPayment.css'
import bankCardImg from '../../../public/bankCard_icon.png'

export default function OrderPayment() {
	return (
		<div className='orderPayment'>
			<h1>Способ оплаты</h1>
			<div className='paymentCard'>
				<input type='radio' checked readOnly />
				<p>Fake bank</p>
				<img src={bankCardImg} alt='Bank Card' />
			</div>
		</div>
	)
}
