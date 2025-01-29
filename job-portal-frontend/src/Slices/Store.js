import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import profileReducer from "./ProfileSlice"

export default configureStore({
    reducer: {
        user: userReducer,
        profile:profileReducer,
    },
});
