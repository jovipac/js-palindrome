import { createSlice } from '@reduxjs/toolkit'
import { api } from '../../../api'

export const fetchItem = (data) => async dispatch => {
  try {
    const response = await api.get(`/iecho?text=${data.text}`)
    dispatch(itemSlice.actions.addItem(response.data))
  } catch (e) {
    dispatch(itemSlice.actions.errorItem())
    return console.error(e.message)
  }
}

export const itemSlice = createSlice({
  name: 'home',
  initialState: {
    items: [],
    loading: 'idle',
    error: false
  },
  reducers: {
    addItem: (state, { payload }) => {
      state.loading = 'success'
      state.items = [...state.items, {
        id: state.items.length + 1,
        text: payload.text,
        palindrome: payload.palindrome
      }]
    },
    removeItem: (state, action) => {
      state = state.filter((text) => text.id !== action.payload.id)
      return state
    },
    errorItem: (state) => {
      state.loading = 'idle'
      state.error = true
      return state
    }
  }
})

export const { addItem, removeItem } = itemSlice.actions

export const selectItems = (state) => state.home
export default itemSlice.reducer
