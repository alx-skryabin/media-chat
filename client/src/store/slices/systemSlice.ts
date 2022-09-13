import {createSlice} from '@reduxjs/toolkit'

export interface SystemState {
  locale: string
  users: []
  user: {
    name: string,
    uuid: string
  } | false
}

const initialState: SystemState = {
  locale: 'ru',
  users: [],
  user: false
}

export const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    setDataUser: (state, action) => {
      state.user = action.payload
    },
    setUsersList: (state, action) => {
      state.users = action.payload
    }
  }
})

export const {setDataUser, setUsersList} = systemSlice.actions

export default systemSlice.reducer
