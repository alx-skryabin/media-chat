import {createSlice} from '@reduxjs/toolkit'

export interface SystemState {
  locale: string
  number: number
}

const initialState: SystemState = {
  locale: 'ru',
  number: 1
}

export const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    anyHandler: (state, action) => {
      state.number = action.payload.number
    }
  }
})

export const {anyHandler} = systemSlice.actions

export default systemSlice.reducer
