import { TRootState } from '@/Store/store'
import { useSelector } from 'react-redux'

export const useAppSelector = useSelector.withTypes<TRootState>()
