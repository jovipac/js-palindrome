import { combineReducers } from '@reduxjs/toolkit'
import homeReducer from '../app/modules/Home/homeSlice'

const createReducer = asyncReducers =>
  combineReducers({
    ...asyncReducers,
    home: homeReducer
  })

export default createReducer
