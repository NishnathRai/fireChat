import { createSlice } from "@reduxjs/toolkit";

const tabStore = createSlice({
    name:"tab",
    initialState:{val:"tab-1"},
    reducers:{
        change:(state,action)=>{
            return action.payload;
        }
    }
});


export const { change } = tabStore.actions;

export default tabStore.reducer;