import { configureStore } from "@reduxjs/toolkit";
import tabStore from "../store/tabStore";

const store = configureStore({
    reducer:{
        tabStore:tabStore
    }
});


export default store;