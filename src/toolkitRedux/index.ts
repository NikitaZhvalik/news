import { combineReducers, configureStore } from "@reduxjs/toolkit";

import newsReducer from "./newsReducer";
import queryReducer from "./queryReducer";
import filterItemsOnPages from "./filterItemsOnPagesReducer";
import filterNewest from "./filterNewestReducer";

const routeReducer = combineReducers({
	news: newsReducer,
	query: queryReducer,
	itemsOnPages: filterItemsOnPages,
	newest: filterNewest,
})

export const store = configureStore({
	reducer: routeReducer,
})

export type AppDispatch = typeof store.dispatch
