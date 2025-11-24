import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const URL = process.env.REACT_APP_BACKEND_API_URL;


export const fetchAllEmployee = createAsyncThunk(
    "employee/fetchAllEmployee",

    async () => {
        const response = await axios.get(`${URL}/find`);
        return response.data;
    }
)


export const createEmpRecord = createAsyncThunk(
    "employee/createEmpRecord",

    async (input) => {
        const response = await axios.post(`${URL}/create`, input);
        return response.data;
    }
)

export const findEmpRecord = createAsyncThunk(
    "employee/findEmpRecord",

    async (id) => {
        const response = await axios.get(`${URL}/findbyid/${id}`);
        return response.data;
    }
)

export const deleteEmpRecord = createAsyncThunk(
    "employee/deleteEmpRecord",

    async (id) => {
        const response = await axios.delete(`${URL}/delete/${id}`);
        return id;
    }
)

const empSlice = createSlice({
    name: "employee",
    initialState: {
        loading: false,
        records: [],
        error: null,
        selectedRecord: null
    },
    extraReducers: (builder) => {
        builder

            //Fetch all employees
            .addCase(fetchAllEmployee.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(fetchAllEmployee.fulfilled, (state, action) => {
                state.loading = false;
                state.records = action.payload;
                state.error = null;
            })

            .addCase(fetchAllEmployee.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            //create employee record
            .addCase(createEmpRecord.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(createEmpRecord.fulfilled, (state, action) => {
                state.loading = false;
                state.records.push(action.payload)
                state.error = null;
            })

            .addCase(createEmpRecord.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            //find employee record
            .addCase(findEmpRecord.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(findEmpRecord.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedRecord = action.payload;
                state.error = null;
            })

            .addCase(findEmpRecord.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            //delete employee record
            .addCase(deleteEmpRecord.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(deleteEmpRecord.fulfilled, (state, action) => {
                state.loading = false;
                state.records = state.records.filter((emp) => emp._id !== action.payload)
                state.error = null;
            })

            .addCase(deleteEmpRecord.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default empSlice.reducer;