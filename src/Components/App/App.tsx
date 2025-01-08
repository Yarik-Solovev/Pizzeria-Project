import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainPage from './../../Pages/MainPage/MainPage'
import OrderPage from '../../Pages/OrderPage/OrderPage'

export default function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <MainPage />,
		},
		{
			path: '/checkout',
			element: <OrderPage />,
		},
	])
	return <RouterProvider router={router} />
}
