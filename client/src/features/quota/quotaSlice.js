import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import customFetch from '../../utils/customFetch'
import { notifications } from '@mantine/notifications'

const initialState = {
  companyName: '',
  email: '',
  contactNo: '',
  subject: '',
  description: '',
  isLoading: false,
  isModalOpened: false,
}

const position = 'top-center'

export const createQuota = createAsyncThunk(
  'quota/createQuota',
  async (quota, thunkAPI) => {
    try {
      const response = await customFetch.post('/quota', quota)
      thunkAPI.dispatch(resetForm())
      return response.data
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const quotaSlice = createSlice({
  name: 'quota',
  initialState,
  reducers: {
    updateForm: (state, { payload }) => {
      return { ...state, ...payload }
    },
    resetForm: () => {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createQuota.pending, (state) => {
      state.isLoading = true
      state.isModalOpened = true
    })
    builder.addCase(createQuota.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.isModalOpened = false
      notifications.show({
        title: payload.msg,
        message: 'We will get back to you soon! 😀',
        color: 'purpleBlue.2',
        position: position,
        autoClose: 3000,
      })
    })
    builder.addCase(createQuota.rejected, (state, { payload }) => {
      state.isLoading = false
      state.isModalOpened = true
      notifications.show({
        title: 'Quota request failed',
        message: payload,
        color: 'red',
        position: position,
      })
    })
  },
})

export const { updateForm, resetForm } = quotaSlice.actions

export default quotaSlice.reducer
