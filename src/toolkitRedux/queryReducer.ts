import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QueryState {
    query: string;
}

const initialState: QueryState = {
    query: '',
}

export const querySlice = createSlice({
    name: 'query',
    initialState,
    reducers: {
        setQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload
        }
    }
})

export const { setQuery } = querySlice.actions
export default querySlice.reducer
