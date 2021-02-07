import { combineReducers, configureStore } from "@reduxjs/toolkit"
import todosSlice from "./todosSlice"
const reducer = combineReducers({
  todos: todosSlice.reducer,
})

const store = configureStore({
  reducer: reducer
})

export default store