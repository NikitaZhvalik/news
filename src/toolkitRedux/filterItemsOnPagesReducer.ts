import { createSlice } from "@reduxjs/toolkit";

interface FilterItemsOnPagesState {
    filterItemsOnPage: string;
}

const initialState :FilterItemsOnPagesState = {
    filterItemsOnPage: '2'
}

export const filterItemsOnPageSlice = createSlice({
    name: 'filterItemsOnPage',
    initialState,
    reducers: {
        setItemsOnPage: (state, action) => {
            state.filterItemsOnPage = action.payload
        }
    }
})

export const {setItemsOnPage} = filterItemsOnPageSlice.actions
export default filterItemsOnPageSlice.reducer