import { TAppDispatch } from '@/Store/store'
import { useDispatch } from 'react-redux'
import { actions } from '../Store/Slices/Modal.Slice'
import { useMemo } from 'react'
import { bindActionCreators } from '@reduxjs/toolkit'

const useAppDispatch = useDispatch.withTypes<TAppDispatch>()
const rootActions = {
	...actions,
}
export function useAction() {
	const dispatch = useAppDispatch()
	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
