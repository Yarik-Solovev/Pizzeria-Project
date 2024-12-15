import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainPage from './../../Pages/MainPage/MainPage'

export default function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <MainPage />,
		},
	])
	return <RouterProvider router={router} />
}
