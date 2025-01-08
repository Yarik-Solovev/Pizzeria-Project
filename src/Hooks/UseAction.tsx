import { TAppDispatch } from '@/Store/store'
import { useDispatch } from 'react-redux'
import { modalActions } from '../Store/Slices/Modal.Slice'
import { searchFieldActions } from '../Store/Slices/SearchField.Slice'
import { categoryActions } from '../Store/Slices/Category.Slice'
import { cartActions } from '../Store/Slices/Cart.Slice'
import { useMemo } from 'react'
import { bindActionCreators } from '@reduxjs/toolkit'

const useAppDispatch = useDispatch.withTypes<TAppDispatch>()
const rootActions = {
	...modalActions,
	...searchFieldActions,
	...categoryActions,
	...cartActions,
}
export function useAction() {
	const dispatch = useAppDispatch()
	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
