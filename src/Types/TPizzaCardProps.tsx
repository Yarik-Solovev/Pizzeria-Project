import { TPizza } from './TPizza'

export type TPizzaCardProps = {
	pizza: TPizza
	onSelected: (pizza: TPizza) => void
}
