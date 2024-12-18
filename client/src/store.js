import { configureStore } from '@reduxjs/toolkit'
import quotaSlice from './features/quota/quotaSlice'

export const store = configureStore({
  reducer: {
    quota: quotaSlice,
  },
})
