import { createSlice } from "@reduxjs/toolkit";

const initialialState = {
  status: "idle", // idle|loading|succeeded|failed|
  loggedInUser: null,
  error: null,
};

const loginSlice = createSlice({
    name: "login",
    initialState: initialialState,
    reducers: {},
    extraReducers: (builder)=>{

    }
    
});

export const loggedInUser = (state) => state.login.loggedInUser;


export default loginSlice.reducer;