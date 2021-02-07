import { createSlice } from "@reduxjs/toolkit"

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => [...state, { content: action.payload }],
  }
})

export default todosSlice
export const  {addTodo}=todosSlice.actions

// const tori={
//   chirp:()=>{
//     console.log("naku")
//   }
// }
// tori.chirp()