import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

export default function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <div>Home</div>,
		},
	])
	return <RouterProvider router={router} />
}
