import { createSlice } from '@reduxjs/toolkit'

const bookListSlice = createSlice({
    name:'bookList',
    initialState:{
        bookList:[],
    },

    reducers:{
        addBook: (state,action) =>{
            state.bookList.push(action.payload)}
    },

    deleteBook: (state, action) => {
        state.bookList.splice(action.payload, 1)
    }

})


export const { addBook, deleteBook } = bookListSlice.actions;
export const selectBookList = (state) =>state.bookList.bookList
export default bookListSlice.reducer;