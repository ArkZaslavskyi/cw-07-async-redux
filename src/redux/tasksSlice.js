import { createSlice } from "@reduxjs/toolkit";
import { addTask, deleteTask, fetchTasks, toggleCompleted } from "./operations";

const handlePending = (state) => {
    state.isLoading = true
};
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        // addTask: {
        //     reducer(state, action) {
        //         return [...state, action.payload]
        //     },
        //     prepare(text) {
        //         return {
        //             payload: {
        //                 id: nanoid(),
        //                 completed: false,
        //                 text,
        //             },
        //         }
        //     }
        // },
        // deleteTask(state, action) {
        //     return state.filter(
        //         task => task.id !== action.payload);
        // },
        // toggleCompleted(state, action) {
        //     return state.map(task => {
        //         if (task.id !== action.payload) {
        //             return task;
        //         };
        //         return {
        //             ...task,
        //             completed: !task.completed
        //         };
        //     });
        // },
        // toggleAllCompleted(state) {
        //     return state.map(task => {
        //         if (task.completed) {
        //             return task;
        //         };
        //         return {
        //             ...task,
        //             completed: true
        //         };
        //     });
        // },
        // deleteAllCompleted(state) {
        //     return state.filter(task => !task.completed);
        // },
    },
    extraReducers: {
        [fetchTasks.pending]: handlePending,
        [fetchTasks.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchTasks.rejected]: handleRejected,

        [addTask.pending]: handlePending,
        [addTask.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [addTask.rejected]: handleRejected,

        [deleteTask.pending]: handlePending,
        [deleteTask.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const idx = state.items.findIndex(
                item => item.id === action.payload.id)
            state.items.splice(idx, 1);
        },
        [deleteTask.rejected]: handleRejected,

        [toggleCompleted.pending]: handlePending,
        [toggleCompleted.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const idx = state.items.findIndex(
                item => item.id === action.payload.id)
            state.items.splice(idx, 1, action.payload);
        },
        [toggleCompleted.rejected]: handleRejected,
    }
});

export const tasksReducer = taskSlice.reducer;
