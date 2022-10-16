import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchTasks = createAsyncThunk("tasks/fetchAll",
    async (_, thunkAPI) => {
        try {
            const resp = await axios.get("/tasks");
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addTask = createAsyncThunk("tasks/addTask",
    async (text, thunkAPI) => {
        try {
            const resp = await axios.post("/tasks", { text });
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteTask = createAsyncThunk("tasks/deleteTask",
    async (taskId, thunkAPI) => {
        try {
            const resp = await axios.delete(`/tasks/${taskId}`);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const toggleCompleted = createAsyncThunk("tasks/toggleCompleted",
    async (task, thunkAPI) => {
        try {
            const resp = await axios.put(`/tasks/${task.id}`, {
                completed: !task.completed,
            });
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// pending ==>  "tasks/fetchall/pending"
// fullfilled ==>  "tasks/fetchall/fullfilled"
// rejected ==>  "tasks/fetchall/rejected"