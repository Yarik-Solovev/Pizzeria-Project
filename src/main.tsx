import 'normalize.css'
import { createRoot } from 'react-dom/client'
import App from './Components/App/App'
import { Provider } from 'react-redux'
import { store } from './Store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</Provider>
)
