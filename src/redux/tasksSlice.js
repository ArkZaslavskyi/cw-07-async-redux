import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksInitialState = [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
];

const taskSlice = createSlice({
    name: 'tasks',
    initialState: tasksInitialState,
    reducers: {
        addTask: {
            reducer(state, action) {
                return [...state, action.payload]
            },
            prepare(text) {
                return {
                    payload: {
                        id: nanoid(),
                        completed: false,
                        text,
                    },
                }
            }
        },
        deleteTask(state, action) {
            return state.filter(
                task => task.id !== action.payload);
        },
        toggleCompleted(state, action) {
            return state.map(task => {
                if (task.id !== action.payload) {
                    return task;
                };
                return {
                    ...task,
                    completed: !task.completed
                };
            });
        },
        toggleAllCompleted(state) {
            return state.map(task => {
                if (task.completed) {
                    return task;
                };
                return {
                    ...task,
                    completed: true
                };
            });
        },
        deleteAllCompleted(state) {
            return state.filter(task => !task.completed);
        },
    },
});

export const {
    addTask,
    deleteTask,
    toggleCompleted,
    toggleAllCompleted,
    deleteAllCompleted,
} = taskSlice.actions;
export const tasksReducer = taskSlice.reducer;
