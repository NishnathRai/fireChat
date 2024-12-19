import { createSlice } from "@reduxjs/toolkit";

const tabStore = createSlice({
    name:"tab",
    initialState:"tab-1",
    reducers:{
        change:(state,action)=>{
            return action;
        }
    }
});


export const { change } = tabStore.actions;

export default tabStore.reducer;