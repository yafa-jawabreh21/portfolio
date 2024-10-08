import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSkills = createAsyncThunk("skillsSlice/fetchSkills", async () => {
    const res = await fetch("http://localhost:9000/Skills"); // Await the fetch call
    const data = await res.json(); // Call res.json() as a function
    return data;
});

export const skillsSlice = createSlice({
    initialState: [],
    name: "skillsSlice",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSkills.fulfilled, (state, action) => {
            return action.payload; // Update the state with fetched data
        });
    },
});

export const {} = skillsSlice.actions;

export default skillsSlice.reducer;