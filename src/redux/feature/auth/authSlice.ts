import { createSlice } from "@reduxjs/toolkit";
import { check_session, userLogin, userLogout, userSignup } from "./authAction";

interface AuthState {
    user: any;
    loading: boolean;
    message: string | null;
    error: string | null;
    islogin: boolean;
    accessToken: string |null;
}

const initialState: AuthState = {
    user: {},
    loading: false,
    message: null,
    error: null,
    islogin: false,
    accessToken:null,
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
                state.error = action.payload as string;
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
                state.accessToken = action.payload.access;
            }).addCase(userLogin.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.payload as string;
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
                state.error = action.payload as string;
            });

            // 4. Check session
            builder.addCase(check_session.pending,(state)=>{
                state.loading = true;
                state.message = null;
                state.error = null;
            }).addCase(check_session.fulfilled,(state,action)=>{
                state.loading = false;
                state.message = action.payload.message;
                state.accessToken = action.payload.access;
                state.user = action.payload.user;
                state.islogin = true;
            }).addCase(check_session.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.payload as string;
            });
    }
})

export default authSlice.reducer;