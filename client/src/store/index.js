import { configureStore } from '@reduxjs/toolkit'
import createReducer from './rootReducer'

const middlewares = []

const store = configureStore({
  reducer: createReducer(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: []
      }
    }).concat(middlewares)
})

store.asyncReducers = {}

export const injectReducer = (key, reducer) => {
  if (store.asyncReducers[key]) {
    return false
  }
  store.asyncReducers[key] = reducer
  store.replaceReducer(createReducer(store.asyncReducers))
  return store
}

export default store
