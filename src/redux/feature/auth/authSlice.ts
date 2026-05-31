import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userLogout, userSignup } from "./authAction";

interface AuthState {
    user: any;
    loading: boolean;
    message: string | null;
    error: string | null;
    islogin: boolean;
}

const initialState: AuthState = {
    user: {},
    loading: false,
    message: null,
    error: null,
    islogin: false,
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
            // 1. signup user
            builder.addCase(userSignup.pending,(state)=>{
                state.loading = true;
                state.error = null;
                state.message = null;
            }).addCase(userSignup.fulfilled,(state,action)=>{
                state.loading = false;
                state.message = action.payload.message;
                state.user = action.payload.user;
            }).addCase(userSignup.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.payload;
            });

            // 2. Login user
            builder.addCase(userLogin.pending,(state)=>{
                state.loading = true;
                state.message = null;
                state.error = null;
            }).addCase(userLogin.fulfilled,(state,action)=>{
                state.loading = false;
                state.user = action.payload.user;
                state.message = action.payload.message;
                state.islogin = true;
            }).addCase(userLogin.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.payload;
                state.islogin = false;
            });

            // 3. Logout user
            builder.addCase(userLogout.pending,(state)=>{
                state.loading = true;
                state.message = null;
                state.error = null;
            }).addCase(userLogout.fulfilled,(state,action)=>{
                state.loading = false;
                state.islogin = false;
                state.message = action.payload.message;
                state.user = {};
            }).addCase(userLogout.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default authSlice.reducer;