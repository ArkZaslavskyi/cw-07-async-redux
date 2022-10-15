import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

const filterInitialState = {
    status: statusFilters.all,
};

const filterSlice = createSlice({
    name: 'filters',
    initialState: filterInitialState,
    reducers: {
        setStatusFilter(state, action) {
            return {
                ...state,
                status: action.payload,
            };
        },
    }
});
export const { setStatusFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;